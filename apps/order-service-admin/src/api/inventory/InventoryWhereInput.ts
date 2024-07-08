import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InventoryWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  product?: StringNullableFilter;
};
