import type { Meta, StoryObj } from "@storybook/react";
import { HotelCard } from "./HotelCard";
import { Badge } from "../../atoms/Badge";

const meta = {
  title: "Molecules/HotelCard",
  component: HotelCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof HotelCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "https://placehold.co/280x200/2563eb/ffffff?text=Hotel",
    imageAlt: "Ritz Lagoa da Anta",
    name: "Ritz Lagoa da Anta",
    location: "Maceió, Alagoas",
    rating: 4,
    pricePerNight: 450,
    currency: "BRL",
  },
};

export const WithBadge: Story = {
  args: {
    imageUrl: "https://placehold.co/280x200/1d4ed8/ffffff?text=Hotel",
    imageAlt: "Hotel Premium Pajuçara",
    name: "Hotel Premium Pajuçara",
    location: "Maceió, Alagoas",
    rating: 5,
    pricePerNight: 780,
    currency: "BRL",
    badge: <Badge variant="info">Melhor preço</Badge>,
  },
};

export const BudgetHotel: Story = {
  args: {
    imageUrl: "https://placehold.co/280x200/64748b/ffffff?text=Hotel",
    imageAlt: "Pousada do Mar",
    name: "Pousada do Mar",
    location: "Maceió, Alagoas",
    rating: 3,
    pricePerNight: 180,
    currency: "BRL",
  },
};
