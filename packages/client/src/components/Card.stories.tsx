import type { Meta, StoryObj } from "@storybook/react-vite";

import { within, expect, userEvent, fn } from "@storybook/test";

import { Card } from "./Card";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "rock",
    onClick: fn(),
  },

  play: async ({
    canvasElement, args,
  }) => {
    const canvas = within(canvasElement);
    const cardElement = canvas.getByText("rock").closest("div") as HTMLElement;

    // 1. Verify initial rendering and content
    await expect(cardElement).toBeInTheDocument();
    await expect(canvas.getByText("rock")).toBeInTheDocument();
    await expect(canvas.getByTestId("card-emoji")).toHaveTextContent("🪨");

    // 2. Simulate user click
    await userEvent.click(cardElement);

    // 3. Assert that the onClick handler was called exactly once with the correct value
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await expect(args.onClick).toHaveBeenCalledWith("rock");
  },
};

export const Winner: Story = {
  args: {
    icon: "paper",
    type: "winner",
    text: "User",
    onClick: undefined, // Non-clickable card for status display
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement);
    const cardElement = canvas.getByText("User").closest("div") as HTMLElement;

    // 1. Verify Winner classes are applied (border-green-800 bg-green-200)
    await expect(cardElement).toHaveClass("border-green-800");
    await expect(cardElement).toHaveClass("bg-green-200");

    // 2. Verify emoji is correct
    await expect(canvas.getByTestId("card-emoji")).toHaveTextContent("📄");
  },
};
export const Loser: Story = {
  args: {
    icon: "scissors",
    type: "loser",
    text: "User",
    onClick: undefined,
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement);
    const cardElement = canvas.getByText("User").closest("div") as HTMLElement;

    // 1. Verify Loser classes are applied (border-red-800 bg-red-200)
    await expect(cardElement).toHaveClass("border-red-800");
    await expect(cardElement).toHaveClass("bg-red-200");

    // 2. Verify emoji is correct
    await expect(canvas.getByTestId("card-emoji")).toHaveTextContent("✂️");
  },
};

export const Tie: Story = {
  args: {
    icon: "rock",
    type: "tie",
    text: "User",
    onClick: undefined,
  },
  play: async ({
    canvasElement,
  }) => {
    const canvas = within(canvasElement);
    const cardElement = canvas.getByText("User").closest("div") as HTMLElement;

    // 1. Verify Tie classes are applied (border-slate-800 bg-slate-200)
    await expect(cardElement).toHaveClass("border-slate-800");
    await expect(cardElement).toHaveClass("bg-slate-200");

    // 2. Verify emoji is correct
    await expect(canvas.getByTestId("card-emoji")).toHaveTextContent("🪨");
  },
};

export const Empty: Story = {
  args: {
    icon: undefined,
    type: "neutral",
    text: "Empty",
    onClick: undefined,
  },
};
