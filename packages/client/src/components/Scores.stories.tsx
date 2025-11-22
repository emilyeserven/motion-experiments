import type { Meta, StoryObj } from "@storybook/react-vite";

import { Scores } from "./Scores";

const meta = {
  component: Scores,
} satisfies Meta<typeof Scores>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userScore: 0,
    compScore: 0,
  },
};
