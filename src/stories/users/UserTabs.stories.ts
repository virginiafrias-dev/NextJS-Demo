import UserTabs from "@/components/users/UserTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "users/UserTabs",
  component: UserTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const messages = [
  {
    name: "John Doe",
    username: "JohnD",
    message: "Primer mensaje",
    repliesCount: 13,
  },
  {
    name: "John Doe",
    username: "JohnD",
    message: "Segundo mensaje",
    repliesCount: 20,
  },
];
const replies = [
  {
    name: "Han Solo",
    username: "HSolo",
    message: "Tercer mensaje",
    repliesCount: 3,
  },
  {
    name: "Juliet Doe",
    username: "JulieeD",
    message: "Cuarto mensaje",
    repliesCount: 2,
  },
];

export const MesageTab: Story = {
  args: {
    messages: messages,
    replies: replies,
  },
};
