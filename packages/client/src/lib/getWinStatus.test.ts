import { getWinStatus } from "@/lib/getWinStatus";
import { describe, expect, test } from "vitest";

describe("getWinStatus", () => {
  // Test Case 1: Checking for a 'tie' result.
  // This should always return 'tie', regardless of isCheckForUser.
  test("should return \"tie\" when winStatus is \"tie\"", () => {
    expect(getWinStatus(true, "tie")).toBe("tie");
    expect(getWinStatus(false, "tie")).toBe("tie");
  });

  // Test Case 2: User wins and we ARE checking for the user's status.
  // isCheckForUser = true, winStatus = 'user' -> Winner
  test("should return \"winner\" when checking for user and user wins", () => {
    const isCheckForUser = true;
    const winStatus = "user";
    expect(getWinStatus(isCheckForUser, winStatus)).toBe("winner");
  });

  // Test Case 3: Comp wins and we are NOT checking for the user's status (i.e., we are checking for the comp's status).
  // isCheckForUser = false, winStatus = 'comp' -> Winner
  test("should return \"winner\" when checking for comp and comp wins", () => {
    const isCheckForUser = false;
    const winStatus = "comp";
    expect(getWinStatus(isCheckForUser, winStatus)).toBe("winner");
  });

  // Test Case 4: Comp wins and we ARE checking for the user's status.
  // isCheckForUser = true, winStatus = 'comp' -> Loser
  test("should return \"loser\" when checking for user and comp wins", () => {
    const isCheckForUser = true;
    const winStatus = "comp";
    expect(getWinStatus(isCheckForUser, winStatus)).toBe("loser");
  });

  // Test Case 5: User wins and we are NOT checking for the user's status (i.e., checking for the comp's status).
  // isCheckForUser = false, winStatus = 'user' -> Loser
  test("should return \"loser\" when checking for comp and user wins", () => {
    const isCheckForUser = false;
    const winStatus = "user";
    expect(getWinStatus(isCheckForUser, winStatus)).toBe("loser");
  });

  // Test Case 6: Catch-all for an unknown or default status.
  // The original function returns "neutral" if none of the explicit win statuses are matched.
  test("should return \"neutral\" for unexpected winStatus values", () => {
    expect(getWinStatus(true, "ongoing")).toBe("neutral");
    expect(getWinStatus(false, "")).toBe("neutral");
    expect(getWinStatus(true, "unknown")).toBe("neutral");
  });
});
