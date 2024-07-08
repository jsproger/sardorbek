import { ServiceInstance as TServiceInstance } from "../api/serviceInstance/ServiceInstance";

export const SERVICEINSTANCE_TITLE_FIELD = "serviceName";

export const ServiceInstanceTitle = (record: TServiceInstance): string => {
  return record.serviceName?.toString() || String(record.id);
};
