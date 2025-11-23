import { SwapContent } from "@/components/SwapContent";

interface ScoresProps {
  userScore: number;
  compScore: number;
}

export function Scores({
  userScore,
  compScore,
}: ScoresProps) {
  return (
    <div className="flex flex-grow-1 flex-col">
      <h2 className="mb-4 text-2xl font-bold">Score</h2>
      <div className="mb-2.5 flex gap-8">
        <div className="flex flex-col">
          <span>User Score</span>
          <SwapContent content={userScore} />
        </div>
        <div className="flex flex-col">
          <span>Computer Score</span>
          <SwapContent content={compScore} />
        </div>
      </div>
    </div>
  );
}
