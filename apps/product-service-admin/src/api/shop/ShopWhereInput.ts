import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type ShopWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
  address?: StringNullableFilter;
  products?: ProductListRelationFilter;
};
