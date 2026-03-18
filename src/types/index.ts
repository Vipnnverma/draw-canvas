export type Subject = 'math' | 'science' | 'general';

export interface UserSession {
  id: string;
  session_name: string;
  total_score: number;
  drawings_count: number;
  created_at: string;
  updated_at: string;
}

export interface Drawing {
  id: string;
  session_id: string;
  prediction: string;
  confidence: number;
  subject: Subject;
  points_earned: number;
  created_at: string;
}

export interface QuizAttempt {
  id: string;
  drawing_id: string;
  session_id: string;
  question: string;
  user_answer: string;
  correct_answer: string;
  is_correct: boolean;
  created_at: string;
}

export interface LearningContent {
  name: string;
  math: {
    title: string;
    explanation: string;
    funFacts: string[];
    quiz: QuizQuestion[];
  };
  science: {
    title: string;
    explanation: string;
    funFacts: string[];
    quiz: QuizQuestion[];
  };
  general: {
    title: string;
    explanation: string;
    funFacts: string[];
    quiz: QuizQuestion[];
  };
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Prediction {
  className: string;
  probability: number;
}
