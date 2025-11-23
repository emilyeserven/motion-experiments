import type { Meta, StoryObj } from "@storybook/react-vite";

import { SwapIcon } from "./SwapIcon";

const meta = {
  component: SwapIcon,
  argTypes: {
    icon: {
      type: "radio",
      options: ["rock", "paper", "scissors"],
    },
  },
} satisfies Meta<typeof SwapIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "rock",
  },
};
