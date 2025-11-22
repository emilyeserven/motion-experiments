import type { Meta, StoryObj } from "@storybook/react-vite";

import { GameButton } from "./GameButton";

const meta = {
  component: GameButton,
} satisfies Meta<typeof GameButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "rock",
    // eslint-disable-next-line -- For debug
    onClick: () => { console.log("click!"); },
  },
};
