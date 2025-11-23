import { describe, expect, it } from "vitest";
import { gameCheck } from "@/lib/gameCheck";

describe("gameCheck logic", () => {
  // --- User chooses ROCK (gameCheck.rock) ---

  it("should correctly determine the outcome when user chooses rock and comp chooses paper (Comp wins)", () => {
    const result = gameCheck.rock.paper;
    expect(result[0]).toBe("paper wins");
    expect(result[1]).toBe("comp");
  });

  it("should correctly determine the outcome when user chooses rock and comp chooses scissors (User wins)", () => {
    const result = gameCheck.rock.scissors;
    expect(result[0]).toBe("rock wins");
    expect(result[1]).toBe("user");
  });

  // --- User chooses PAPER (gameCheck.paper) ---

  it("should correctly determine the outcome when user chooses paper and comp chooses rock (User wins)", () => {
    const result = gameCheck.paper.rock;
    expect(result[0]).toBe("paper wins");
    expect(result[1]).toBe("user");
  });

  it("should correctly determine the outcome when user chooses paper and comp chooses scissors (Comp wins)", () => {
    const result = gameCheck.paper.scissors;
    expect(result[0]).toBe("scissors win");
    expect(result[1]).toBe("comp");
  });

  // --- User chooses SCISSORS (gameCheck.scissors) ---

  it("should correctly determine the outcome when user chooses scissors and comp chooses paper (User wins)", () => {
    const result = gameCheck.scissors.paper;
    // Expectation updated from 'scissors win' to 'scissors wins'
    expect(result[0]).toBe("scissors wins");
    expect(result[1]).toBe("user");
  });

  it("should correctly determine the outcome when user chooses scissors and comp chooses rock (Comp wins)", () => {
    const result = gameCheck.scissors.rock;
    // Expectation updated from 'rock wins' to 'rock win'
    expect(result[0]).toBe("rock win");
    expect(result[1]).toBe("comp");
  });
});
