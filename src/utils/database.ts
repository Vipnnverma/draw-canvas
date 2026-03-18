import { supabase } from '../lib/supabase';
import { UserSession, Drawing, QuizAttempt, Subject } from '../types';

export async function createSession(): Promise<UserSession | null> {
  const { data, error } = await supabase
    .from('user_sessions')
    .insert({
      session_name: 'My Drawing Session',
      total_score: 0,
      drawings_count: 0
    })
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error creating session:', error);
    return null;
  }

  return data;
}

export async function updateSessionScore(
  sessionId: string,
  scoreIncrement: number,
  drawingsIncrement: number = 0
): Promise<void> {
  const { data: session } = await supabase
    .from('user_sessions')
    .select('total_score, drawings_count')
    .eq('id', sessionId)
    .maybeSingle();

  if (!session) return;

  await supabase
    .from('user_sessions')
    .update({
      total_score: session.total_score + scoreIncrement,
      drawings_count: session.drawings_count + drawingsIncrement,
      updated_at: new Date().toISOString()
    })
    .eq('id', sessionId);
}

export async function saveDrawing(
  sessionId: string,
  prediction: string,
  confidence: number,
  subject: Subject,
  pointsEarned: number
): Promise<Drawing | null> {
  const { data, error } = await supabase
    .from('drawings')
    .insert({
      session_id: sessionId,
      prediction,
      confidence,
      subject,
      points_earned: pointsEarned
    })
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error saving drawing:', error);
    return null;
  }

  return data;
}

export async function saveQuizAttempt(
  drawingId: string,
  sessionId: string,
  question: string,
  userAnswer: string,
  correctAnswer: string,
  isCorrect: boolean
): Promise<QuizAttempt | null> {
  const { data, error } = await supabase
    .from('quiz_attempts')
    .insert({
      drawing_id: drawingId,
      session_id: sessionId,
      question,
      user_answer: userAnswer,
      correct_answer: correctAnswer,
      is_correct: isCorrect
    })
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error saving quiz attempt:', error);
    return null;
  }

  return data;
}
