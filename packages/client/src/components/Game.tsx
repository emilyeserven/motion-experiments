import type { OptionType } from "@/components/Card";

import { useCallback, useState } from "react";

import { Card } from "@/components/Card";
import { ResultArea } from "@/components/ResultArea";
import { compare } from "@/lib/compare";
import { computerRoll } from "@/lib/computerRoll";

export function Game() {
  const [turn, setTurn] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [userChoice, setUserChoice] = useState<OptionType>();
  const [compChoice, setCompChoice] = useState<OptionType>();
  const [winner, setWinner] = useState("tie");

  const userChoiceFunc = useCallback((choice: OptionType) => {
    // set the function input to be the variable userChoice.
    const userChoice = choice;

    // assign the returned value of the computerRoll function to the variable computerChoice.
    const computerChoice = computerRoll();

    const result = compare(userChoice, computerChoice);

    setCompChoice(computerChoice as OptionType);
    setUserChoice(userChoice);
    setWinner(result[1]);
    setTurn(turn + 1);

    if (result[1] === "user") {
      setUserScore(userScore + 1);
    }
    else if (result[1] === "comp") {
      setCompScore(compScore + 1);
    }
  }, [compScore, userScore, turn]);

  return (
    <div className="font-sans text-gray-900">
      <div
        className="mx-auto mt-2.5 w-full max-w-[800px] p-4"
      >

        <h1 className="mt-0 mb-4 text-3xl font-bold">Rock, Paper, Scissors!</h1>

        <div
          className={`
            inset-1 flex flex-row justify-center gap-4 rounded-sm bg-gray-100
            py-8
          `}
        >
          <Card
            icon="rock"
            text="Rock"
            onClick={userChoiceFunc}
          />
          <Card
            icon="paper"
            text="Paper"
            onClick={userChoiceFunc}
          />
          <Card
            icon="scissors"
            text="Scissors"
            onClick={userChoiceFunc}
          />

        </div>

        <ResultArea
          userChoice={userChoice}
          compChoice={compChoice}
          userScore={userScore}
          compScore={compScore}
          winner={winner}
          turn={turn}
        />
      </div>
    </div>
  );
}
