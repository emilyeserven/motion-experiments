import type { Meta, StoryObj } from "@storybook/react-vite";

import { ResultArea } from "./ResultArea";

const meta = {
  component: ResultArea,
} satisfies Meta<typeof ResultArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userChoice: "userChoice",
    compChoice: "compChoice",
    userScore: 0,
    compScore: 0,
  },
};
