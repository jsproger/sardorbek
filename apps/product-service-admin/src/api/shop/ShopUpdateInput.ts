import { ProductUpdateManyWithoutShopsInput } from "./ProductUpdateManyWithoutShopsInput";

export type ShopUpdateInput = {
  name?: string | null;
  typeField?: string | null;
  address?: string | null;
  products?: ProductUpdateManyWithoutShopsInput;
};
