import { ProductCreateNestedManyWithoutShopsInput } from "./ProductCreateNestedManyWithoutShopsInput";

export type ShopCreateInput = {
  name?: string | null;
  typeField?: string | null;
  address?: string | null;
  products?: ProductCreateNestedManyWithoutShopsInput;
};
