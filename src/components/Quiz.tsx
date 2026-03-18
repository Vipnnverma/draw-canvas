import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  onAnswer: (isCorrect: boolean, question: string, userAnswer: string, correctAnswer: string) => void;
}

export function Quiz({ questions, onAnswer }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  if (questions.length === 0) return null;

  const question = questions[currentQuestion];

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);

    const isCorrect = answer === question.correctAnswer;
    onAnswer(isCorrect, question.question, answer, question.correctAnswer);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      }
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border-4 border-blue-300">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Quiz Time!</h3>
      <p className="text-lg mb-4 text-gray-700">{question.question}</p>
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === question.correctAnswer;
          const showCorrect = showResult && isCorrect;
          const showWrong = showResult && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              disabled={showResult}
              className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition transform hover:scale-102 flex items-center justify-between ${
                showCorrect
                  ? 'bg-green-500 text-white'
                  : showWrong
                  ? 'bg-red-500 text-white'
                  : isSelected
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              <span>{option}</span>
              {showCorrect && <CheckCircle size={24} />}
              {showWrong && <XCircle size={24} />}
            </button>
          );
        })}
      </div>
      {showResult && (
        <div className={`mt-4 p-3 rounded-xl text-center font-bold ${
          selectedAnswer === question.correctAnswer
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'
        }`}>
          {selectedAnswer === question.correctAnswer
            ? '🎉 Correct! You earned 10 points!'
            : `❌ Oops! The correct answer is: ${question.correctAnswer}`}
        </div>
      )}
    </div>
  );
}
