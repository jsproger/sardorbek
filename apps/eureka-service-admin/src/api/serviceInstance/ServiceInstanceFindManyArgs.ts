import { ServiceInstanceWhereInput } from "./ServiceInstanceWhereInput";
import { ServiceInstanceOrderByInput } from "./ServiceInstanceOrderByInput";

export type ServiceInstanceFindManyArgs = {
  where?: ServiceInstanceWhereInput;
  orderBy?: Array<ServiceInstanceOrderByInput>;
  skip?: number;
  take?: number;
};
