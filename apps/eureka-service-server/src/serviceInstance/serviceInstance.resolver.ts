import * as graphql from "@nestjs/graphql";
import { ServiceInstanceResolverBase } from "./base/serviceInstance.resolver.base";
import { ServiceInstance } from "./base/ServiceInstance";
import { ServiceInstanceService } from "./serviceInstance.service";

@graphql.Resolver(() => ServiceInstance)
export class ServiceInstanceResolver extends ServiceInstanceResolverBase {
  constructor(protected readonly service: ServiceInstanceService) {
    super(service);
  }
}
