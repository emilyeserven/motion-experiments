import type { Meta, StoryObj } from "@storybook/react-vite";

import { HorizontalSwap } from "./HorizontalSwap";

const meta = {
  component: HorizontalSwap,
  argTypes: {
    key: {
      control: "radio",
      options: ["rock", "paper", "scissors"],
    },
  },
} satisfies Meta<typeof HorizontalSwap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: "rock",
    children: <>Test</>,
  },
};
