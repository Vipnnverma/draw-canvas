import { Lightbulb, Star } from 'lucide-react';
import { Subject, LearningContent } from '../types';
import { Quiz } from './Quiz';

interface LearningPanelProps {
  content: LearningContent | null;
  subject: Subject;
  confidence: number;
  onQuizAnswer: (isCorrect: boolean, question: string, userAnswer: string, correctAnswer: string) => void;
}

export function LearningPanel({ content, subject, confidence, onQuizAnswer }: LearningPanelProps) {
  if (!content) {
    return (
      <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 shadow-lg text-center">
        <p className="text-2xl font-bold text-gray-700">Draw something amazing!</p>
        <p className="text-gray-600 mt-2">I'll recognize it and teach you cool things about it!</p>
      </div>
    );
  }

  const subjectContent = content[subject];

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg border-4 border-green-300">
        <div className="flex items-center gap-2 mb-4">
          <Star size={32} className="text-yellow-500" />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              This is a {content.name}!
            </h2>
            {confidence > 0 && (
              <p className="text-sm text-gray-600">
                Confidence: {(confidence * 100).toFixed(0)}%
              </p>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-700 mb-2">{subjectContent.title}</h3>
        <p className="text-lg text-gray-700 mb-4">{subjectContent.explanation}</p>

        <div className="bg-white rounded-xl p-4 border-2 border-yellow-300">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={24} className="text-yellow-500" />
            <h4 className="text-lg font-bold text-gray-800">Fun Facts!</h4>
          </div>
          <ul className="space-y-2">
            {subjectContent.funFacts.map((fact, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                <span className="text-gray-700">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {subjectContent.quiz.length > 0 && (
        <Quiz questions={subjectContent.quiz} onAnswer={onQuizAnswer} />
      )}
    </div>
  );
}
