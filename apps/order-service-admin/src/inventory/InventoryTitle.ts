import { Inventory as TInventory } from "../api/inventory/Inventory";

export const INVENTORY_TITLE_FIELD = "product";

export const InventoryTitle = (record: TInventory): string => {
  return record.product?.toString() || String(record.id);
};
