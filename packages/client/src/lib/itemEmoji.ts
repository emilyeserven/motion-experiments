export function itemEmoji(choice: string) {
  if (choice === "rock") {
    return "🪨";
  }
  if (choice === "paper") {
    return "📄";
  }
  if (choice === "scissors") {
    return "✂️";
  }
  return "";
};
