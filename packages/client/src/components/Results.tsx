interface ResultsProps {
  userChoice: string;
  compChoice: string;
}

export function Results({
  userChoice,
  compChoice,
}: ResultsProps) {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">Results</h2>
      <div className="mb-2.5">
        User Choice was:
        {" "}
        <span id="userChoice">{userChoice}</span>
      </div>
      <div className="mb-2.5">
        Computer Score was:
        {" "}
        <span id="compChoice">{compChoice}</span>
      </div>
    </>
  );
}
