import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ServiceInstanceWhereInput = {
  id?: StringFilter;
  instanceId?: StringNullableFilter;
  host?: StringNullableFilter;
  port?: IntNullableFilter;
  status?: StringNullableFilter;
  serviceName?: StringNullableFilter;
};
