import { ServiceInstanceWhereUniqueInput } from "./ServiceInstanceWhereUniqueInput";
import { ServiceInstanceUpdateInput } from "./ServiceInstanceUpdateInput";

export type UpdateServiceInstanceArgs = {
  where: ServiceInstanceWhereUniqueInput;
  data: ServiceInstanceUpdateInput;
};
