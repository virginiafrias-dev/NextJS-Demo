import UsersLayout from "@/app/(main)/layout";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layout/Users",
  component: UsersLayout,

  tags: ["autodocs"],
} satisfies Meta<typeof UsersLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// const links = [
//   { title: "Inicio", href: "/" },
//   { title: "Explorar", href: "/explorar" },
//   { title: "Perfil", href: "/mi-perfil" },
// ];

export const Primary: Story = {
  args: {
    children: <>ESTO ES UN CONTENIDO</>,
  },
};
