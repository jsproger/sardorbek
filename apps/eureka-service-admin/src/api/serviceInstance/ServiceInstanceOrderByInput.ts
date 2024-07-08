import { SortOrder } from "../../util/SortOrder";

export type ServiceInstanceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  instanceId?: SortOrder;
  host?: SortOrder;
  port?: SortOrder;
  status?: SortOrder;
  serviceName?: SortOrder;
};
