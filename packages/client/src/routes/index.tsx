import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

import { GameButton } from "@/components/GameButton";
import { computerRoll } from "@/lib/computerRoll";
import { gameCheck } from "@/lib/gameCheck";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");

  const compare = (choice1: string, choice2: string) => {
    if (!(choice1 in gameCheck) || !(choice2 in gameCheck)) {
      return ["Invalid arguments passed", "tie"];
    }
    if (choice1 === choice2) {
      return ["The result is a tie!", "tie"];
    }
    return gameCheck[choice1][choice2];
  };

  const userChoiceFunc = function (choice: string) {
    // set the function input to be the variable userChoice.
    const userChoice = choice;
    console.log("1. User Choice is " + choice);
    // assign the returned value of the computerRoll function to the variable computerChoice.
    const computerChoice = computerRoll();

    const result = compare(userChoice, computerChoice);
    // Compare the two scores with the compare function.
    console.log(compare(userChoice, computerChoice));
    console.log("6. " + result[0]);

    setCompChoice(computerChoice);
    setUserChoice(userChoice);

    if (result[1] === "user") {
      setUserScore(userScore + 1);
    }
    else if (result[1] === "comp") {
      setCompScore(compScore + 1);
    }
    else if (result[1] === "tie") {
      console.log("7c. It was a tie!");
    }

    console.log("User Score is now " + userScore + ", while Computer Score is now " + compScore + ".");
    // Modify the cached elements (at top) to the new values.
  };

  return (
    <div className="font-sans text-gray-900">
      <div
        className={`
          mx-auto mt-2.5 w-full max-w-[800px] border-2 border-[#eee] p-4
        `}
      >

        <h1 className="mt-0 mb-4 text-3xl font-bold">Rock, Paper, Scissors!</h1>

        <div className="w-full">
          <GameButton
            type="rock"
            onClick={userChoiceFunc}
          />
          <GameButton
            type="paper"
            onClick={userChoiceFunc}
          />
          <GameButton
            type="scissors"
            onClick={userChoiceFunc}
          />

        </div>

        <div className="mt-8">
          <div
            className={`
              inline-block w-[49%] align-top
              max-[800px]:block max-[800px]:w-full
            `}
          >
            <h2 className="mb-4 text-2xl font-bold">Results</h2>
            <div className="mb-2.5">
              <span className="font-bold">You: </span>
              {userChoice}
            </div>
            <div className="mb-2.5">
              <span className="font-bold">Computer: </span>
              {compChoice}
            </div>

            <div className="invisible clear-both block h-0" />

            <div className="mt-2.5">
              <span id="overallResult">Click for a result!</span>
            </div>
          </div>

          <div
            className={`
              mt-0 inline-block w-[49%] align-top
              max-[800px]:mt-8 max-[800px]:block max-[800px]:w-full
            `}
          >
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
        </div>

        <div className="mt-5 w-full text-center">
          <sub className="inline-block">
            <a
              href="https://icons8.com/web-app/tag/rock-paper-scissor"
              className={`
                text-blue-600
                hover:underline
              `}
            >
              Icons from icons8
            </a>
          </sub>
        </div>
      </div>
    </div>
  );
}
