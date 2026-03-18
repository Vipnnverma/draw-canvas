/*
  # SmartDraw AI Database Schema

  ## Overview
  Creates tables for the SmartDraw AI educational drawing application to store user sessions, drawings, scores, and learning progress.

  ## New Tables
  
  ### `user_sessions`
  Stores individual user sessions with their total score and progress
  - `id` (uuid, primary key) - Unique session identifier
  - `session_name` (text) - Optional name for the session (e.g., "Alex's Session")
  - `total_score` (integer) - Cumulative score for the session
  - `drawings_count` (integer) - Number of drawings made
  - `created_at` (timestamptz) - Session creation timestamp
  - `updated_at` (timestamptz) - Last activity timestamp

  ### `drawings`
  Records each drawing attempt with AI prediction results
  - `id` (uuid, primary key) - Unique drawing identifier
  - `session_id` (uuid, foreign key) - Reference to user session
  - `prediction` (text) - AI-predicted object name
  - `confidence` (real) - Confidence score of prediction (0-1)
  - `subject` (text) - Selected subject (math, science, general)
  - `points_earned` (integer) - Points awarded for this drawing
  - `created_at` (timestamptz) - Drawing timestamp

  ### `quiz_attempts`
  Tracks quiz question attempts and answers
  - `id` (uuid, primary key) - Unique attempt identifier
  - `drawing_id` (uuid, foreign key) - Reference to associated drawing
  - `session_id` (uuid, foreign key) - Reference to user session
  - `question` (text) - Quiz question text
  - `user_answer` (text) - User's selected answer
  - `correct_answer` (text) - The correct answer
  - `is_correct` (boolean) - Whether answer was correct
  - `created_at` (timestamptz) - Attempt timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for sessions to allow anonymous users
  - Anyone can create and update their own session data
*/

-- Create user_sessions table
CREATE TABLE IF NOT EXISTS user_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_name text DEFAULT '',
  total_score integer DEFAULT 0,
  drawings_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create drawings table
CREATE TABLE IF NOT EXISTS drawings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES user_sessions(id) ON DELETE CASCADE,
  prediction text NOT NULL,
  confidence real DEFAULT 0,
  subject text DEFAULT 'general',
  points_earned integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create quiz_attempts table
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  drawing_id uuid REFERENCES drawings(id) ON DELETE CASCADE,
  session_id uuid REFERENCES user_sessions(id) ON DELETE CASCADE,
  question text NOT NULL,
  user_answer text NOT NULL,
  correct_answer text NOT NULL,
  is_correct boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE drawings ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Policies for user_sessions (public access for anonymous users)
CREATE POLICY "Anyone can view sessions"
  ON user_sessions FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create sessions"
  ON user_sessions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update sessions"
  ON user_sessions FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Policies for drawings
CREATE POLICY "Anyone can view drawings"
  ON drawings FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create drawings"
  ON drawings FOR INSERT
  WITH CHECK (true);

-- Policies for quiz_attempts
CREATE POLICY "Anyone can view quiz attempts"
  ON quiz_attempts FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create quiz attempts"
  ON quiz_attempts FOR INSERT
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_drawings_session_id ON drawings(session_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_session_id ON quiz_attempts(session_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_drawing_id ON quiz_attempts(drawing_id);