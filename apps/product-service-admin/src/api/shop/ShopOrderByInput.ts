import { SortOrder } from "../../util/SortOrder";

export type ShopOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  address?: SortOrder;
};
