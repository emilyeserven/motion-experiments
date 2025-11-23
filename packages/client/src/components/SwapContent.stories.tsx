import type { Meta, StoryObj } from "@storybook/react-vite";

import { SwapContent } from "./SwapContent";

const meta = {
  component: SwapContent,
} satisfies Meta<typeof SwapContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "1",
  },
};
