import type { Meta, StoryObj } from "@storybook/react-vite";

import { SwapCard } from "./SwapCard";

const meta = {
  component: SwapCard,
  argTypes: {
    icon: {
      type: "select",
      options: ["rock", "paper", "scissors"],
    },
  },
} satisfies Meta<typeof SwapCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "rock",
  },
};
