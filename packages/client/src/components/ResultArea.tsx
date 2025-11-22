import { Results } from "@/components/Results";
import { Scores } from "@/components/Scores";

interface ResultAreaProps {
  userChoice: string;
  compChoice: string;
  userScore: number;
  compScore: number;
}

export function ResultArea({
  userChoice,
  userScore,
  compChoice,
  compScore,
}: ResultAreaProps) {
  return (
    <div className="mt-8">
      <div
        className={`
          inline-block w-[49%] align-top
          max-[800px]:block max-[800px]:w-full
        `}
      >
        <Results
          userChoice={userChoice}
          compChoice={compChoice}
        />
      </div>

      <div
        className={`
          mt-0 inline-block w-[49%] align-top
          max-[800px]:mt-8 max-[800px]:block max-[800px]:w-full
        `}
      >
        <Scores
          userScore={userScore}
          compScore={compScore}
        />
      </div>
    </div>
  );
}
