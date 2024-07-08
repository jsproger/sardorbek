export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: string | null;
  user: string | null;
  product: string | null;
  quantity: number | null;
};
