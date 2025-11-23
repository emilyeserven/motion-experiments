import type { Meta, StoryObj } from "@storybook/react-vite";

import { SwapCard } from "./SwapCard";

const meta = {
  component: SwapCard,
  argTypes: {
    key: {
      control: "radio",
      options: ["rock", "paper", "scissors"],
    },
  },
} satisfies Meta<typeof SwapCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: "rock",
    children: <>Test</>,
  },
};
