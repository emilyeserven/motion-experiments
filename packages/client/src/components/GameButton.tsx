interface GameButtonParams {
  type: "rock" | "paper" | "scissors";
}

export function GameButton({
  type,
}: GameButtonParams) {
  return (
    <div
      id={type}
      className={`
        mx-[1%] inline-block w-[28%] cursor-pointer border-2 border-white
        bg-[#efefef] px-[1%] py-[2%] text-center align-top transition-all
        duration-200 ease-in-out
        hover:border-[#0080ff]
      `}
    >
      <img
        src={`/${type}.png`}
        alt={type}
        className="mb-5 inline-block h-20 w-20"
      />
      <br />
      <span className="relative bottom-0 text-[25px]">{type}</span>
    </div>
  );
}
