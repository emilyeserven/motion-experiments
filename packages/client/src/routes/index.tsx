import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="font-sans text-gray-900">
      <div
        className={`
          mx-auto mt-2.5 w-full max-w-[800px] border-2 border-[#eee] p-4
        `}
      >

        <h1 className="mt-0 mb-4 text-3xl font-bold">Rock, Paper, Scissors!</h1>

        <div className="w-full">
          <div
            id="rock"
            className={`
              mx-[1%] inline-block w-[28%] cursor-pointer border-2 border-white
              bg-[#efefef] px-[1%] py-[2%] text-center align-top transition-all
              duration-200 ease-in-out
              hover:border-[#0080ff]
            `}
          >
            <img
              src="/rock.png"
              alt="Rock"
              className="mb-5 inline-block h-20 w-20"
            />
            <br />
            <span className="relative bottom-0 text-[25px]">Rock</span>
          </div>

          <div
            id="paper"
            className={`
              mx-[1%] inline-block w-[28%] cursor-pointer border-2 border-white
              bg-[#efefef] px-[1%] py-[2%] text-center align-top transition-all
              duration-200 ease-in-out
              hover:border-[#0080ff]
            `}
          >
            <img
              src="/paper.png"
              alt="Paper"
              className="mb-5 inline-block h-20 w-20"
            />
            <br />
            <span className="relative bottom-0 text-[25px]">Paper</span>
          </div>

          <div
            id="scissors"
            className={`
              mx-[1%] inline-block w-[28%] cursor-pointer border-2 border-white
              bg-[#efefef] px-[1%] py-[2%] text-center align-top transition-all
              duration-200 ease-in-out
              hover:border-[#0080ff]
            `}
          >
            <img
              src="/scissor.png"
              alt="Scissors"
              className="mb-5 inline-block h-20 w-20"
            />
            <br />
            <span className="relative bottom-0 text-[25px]">Scissor</span>
          </div>
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
              <span id="userPick" />
            </div>
            <div className="mb-2.5">
              <span className="font-bold">Computer: </span>
              <span id="compPick" />
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
              <span id="userScore">0</span>
            </div>
            <div className="mb-2.5">
              Computer Score is now:
              {" "}
              <span id="compScore">0</span>
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
