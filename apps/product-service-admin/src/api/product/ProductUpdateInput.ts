import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type ProductUpdateInput = {
  price?: number | null;
  name?: string | null;
  shop?: ShopWhereUniqueInput | null;
};
