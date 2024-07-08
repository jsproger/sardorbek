import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceInstanceService } from "./serviceInstance.service";
import { ServiceInstanceControllerBase } from "./base/serviceInstance.controller.base";

@swagger.ApiTags("serviceInstances")
@common.Controller("serviceInstances")
export class ServiceInstanceController extends ServiceInstanceControllerBase {
  constructor(protected readonly service: ServiceInstanceService) {
    super(service);
  }
}
