import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Enter destination..." },
};

export const WithLabel: Story = {
  args: { label: "Destination", placeholder: "e.g. Maceió, Brazil" },
};

export const WithError: Story = {
  args: {
    label: "Check-in Date",
    value: "",
    error: "Please select a check-in date",
  },
};

export const Disabled: Story = {
  args: { label: "Guests", value: "2 adults", disabled: true },
};
