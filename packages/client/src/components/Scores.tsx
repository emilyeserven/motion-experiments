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
      <div className="mb-2.5">
        User Score is now:
        {" "}
        <span id="userScore">{userScore}</span>
      </div>
      <div className="mb-2.5">
        Computer Score is now:
        {" "}
        <span id="compScore">{compScore}</span>
      </div>
    </div>
  );
}
