import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type ProductCreateInput = {
  price?: number | null;
  name?: string | null;
  shop?: ShopWhereUniqueInput | null;
};
