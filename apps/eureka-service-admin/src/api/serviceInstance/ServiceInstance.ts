export type ServiceInstance = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  instanceId: string | null;
  host: string | null;
  port: number | null;
  status: string | null;
  serviceName: string | null;
};
