import { Shop } from "../shop/Shop";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  name: string | null;
  shop?: Shop | null;
};
