import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  user?: StringNullableFilter;
  product?: StringNullableFilter;
  quantity?: IntNullableFilter;
};
