import { getItemEmoji } from "@/utils/getItemEmoji";
import { describe, expect, it } from "vitest";

describe("getItemEmoji", () => {
  it("should return the rock emoji for \"rock\"", () => {
    expect(getItemEmoji("rock")).toBe("🪨");
  });

  it("should return the paper emoji for \"paper\"", () => {
    expect(getItemEmoji("paper")).toBe("📄");
  });

  it("should return the scissors emoji for \"scissors\"", () => {
    expect(getItemEmoji("scissors")).toBe("✂️");
  });

  it("should return an empty string for an unknown choice", () => {
    expect(getItemEmoji("lizard")).toBe("");
  });

  it("should return an empty string for an empty input string", () => {
    expect(getItemEmoji("")).toBe("");
  });

  it("should return an empty string for a choice with incorrect casing", () => {
    // The function is case-sensitive, so this should fail the checks.
    expect(getItemEmoji("Rock")).toBe("");
  });
});
