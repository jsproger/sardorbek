import { Product } from "../product/Product";

export type Shop = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  typeField: string | null;
  address: string | null;
  products?: Array<Product>;
};
