import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta = {
  title: "Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "body", "bodySmall", "caption"],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: { variant: "h1", children: "Hotel Search Results" },
};

export const Heading2: Story = {
  args: { variant: "h2", children: "38 hotéis encontrados em Maceió" },
};

export const Heading3: Story = {
  args: { variant: "h3", children: "Ritz Lagoa da Anta" },
};

export const Body: Story = {
  args: { variant: "body", children: "Located in the heart of Maceió with stunning ocean views." },
};

export const BodySmall: Story = {
  args: { variant: "bodySmall", children: "Café da manhã incluso" },
};

export const Caption: Story = {
  args: { variant: "caption", children: "Preço por noite" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="body">Body text</Typography>
      <Typography variant="bodySmall">Body small text</Typography>
      <Typography variant="caption">Caption text</Typography>
    </div>
  ),
};
