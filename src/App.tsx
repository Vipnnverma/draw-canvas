import { useState, useEffect } from 'react';
import { Sparkles, PartyPopper } from 'lucide-react';
import { DrawingCanvas } from './components/DrawingCanvas';
import { SubjectSelector } from './components/SubjectSelector';
import { LearningPanel } from './components/LearningPanel';
import { ScoreDisplay } from './components/ScoreDisplay';
import { Subject, UserSession, LearningContent } from './types';
import { recognizeDrawing } from './utils/recognition';
import { learningContent, getDefaultContent } from './data/learningContent';
import {
  createSession,
  updateSessionScore,
  saveDrawing,
  saveQuizAttempt
} from './utils/database';

function App() {
  const [session, setSession] = useState<UserSession | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject>('math');
  const [currentContent, setCurrentContent] = useState<LearningContent | null>(null);
  const [confidence, setConfidence] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentDrawingId, setCurrentDrawingId] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    initializeSession();
  }, []);

  const initializeSession = async () => {
    const newSession = await createSession();
    if (newSession) {
      setSession(newSession);
    }
  };

  const handleRecognize = async (imageData: ImageData) => {
    if (!session) return;

    setIsProcessing(true);

    try {
      const prediction = await recognizeDrawing(imageData);
      const content = learningContent[prediction.className] || getDefaultContent();

      setCurrentContent(content);
      setConfidence(prediction.probability);

      const pointsEarned = 10;
      const drawing = await saveDrawing(
        session.id,
        prediction.className,
        prediction.probability,
        selectedSubject,
        pointsEarned
      );

      if (drawing) {
        setCurrentDrawingId(drawing.id);
        await updateSessionScore(session.id, pointsEarned, 1);

        setSession({
          ...session,
          total_score: session.total_score + pointsEarned,
          drawings_count: session.drawings_count + 1
        });

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Recognition error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleQuizAnswer = async (
    isCorrect: boolean,
    question: string,
    userAnswer: string,
    correctAnswer: string
  ) => {
    if (!session || !currentDrawingId) return;

    await saveQuizAttempt(
      currentDrawingId,
      session.id,
      question,
      userAnswer,
      correctAnswer,
      isCorrect
    );

    if (isCorrect) {
      const pointsEarned = 10;
      await updateSessionScore(session.id, pointsEarned);

      setSession({
        ...session,
        total_score: session.total_score + pointsEarned
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-green-100 to-yellow-200">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles size={48} className="text-yellow-500 animate-pulse" />
            <h1 className="text-5xl font-black text-gray-800">
              SmartDraw AI
            </h1>
            <Sparkles size={48} className="text-yellow-500 animate-pulse" />
          </div>
          <p className="text-2xl font-bold text-gray-700">
            Draw, Learn & Grow!
          </p>
        </header>

        {session && (
          <div className="flex justify-center mb-6">
            <ScoreDisplay
              score={session.total_score}
              drawingsCount={session.drawings_count}
            />
          </div>
        )}

        <div className="mb-6">
          <SubjectSelector
            selectedSubject={selectedSubject}
            onSubjectChange={setSelectedSubject}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-3xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
                Drawing Canvas
              </h2>
              <DrawingCanvas
                onRecognize={handleRecognize}
                isProcessing={isProcessing}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <LearningPanel
              content={currentContent}
              subject={selectedSubject}
              confidence={confidence}
              onQuizAnswer={handleQuizAnswer}
            />
          </div>
        </div>

        {showSuccess && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-green-400 animate-bounce">
              <div className="flex items-center gap-4">
                <PartyPopper size={64} className="text-green-500" />
                <div>
                  <p className="text-3xl font-black text-green-600">
                    You drew correctly!
                  </p>
                  <p className="text-xl text-gray-700">+10 points!</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
