import type { Meta, StoryObj } from "@storybook/react-vite";

import { ResultArea } from "./ResultArea";

const meta = {
  component: ResultArea,
} satisfies Meta<typeof ResultArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userChoice: "rock",
    compChoice: "rock",
    userScore: 0,
    compScore: 0,
    winner: undefined,
    turn: 0,
  },
};

export const Hidden: Story = {
  args: {
    userChoice: undefined,
    compChoice: undefined,
    userScore: 0,
    compScore: 0,
    winner: undefined,
    turn: 0,
  },
};
