import { Trophy, Palette } from 'lucide-react';

interface ScoreDisplayProps {
  score: number;
  drawingsCount: number;
}

export function ScoreDisplay({ score, drawingsCount }: ScoreDisplayProps) {
  return (
    <div className="flex items-center gap-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 rounded-2xl shadow-lg">
      <div className="flex items-center gap-2">
        <Trophy size={28} className="animate-bounce" />
        <div>
          <p className="text-sm font-semibold opacity-90">Score</p>
          <p className="text-2xl font-bold">{score}</p>
        </div>
      </div>
      <div className="w-px h-12 bg-white opacity-30" />
      <div className="flex items-center gap-2">
        <Palette size={28} />
        <div>
          <p className="text-sm font-semibold opacity-90">Drawings</p>
          <p className="text-2xl font-bold">{drawingsCount}</p>
        </div>
      </div>
    </div>
  );
}
