import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type ProductWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  name?: StringNullableFilter;
  shop?: ShopWhereUniqueInput;
};
