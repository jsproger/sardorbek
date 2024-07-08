import { Module } from "@nestjs/common";
import { ServiceInstanceModuleBase } from "./base/serviceInstance.module.base";
import { ServiceInstanceService } from "./serviceInstance.service";
import { ServiceInstanceController } from "./serviceInstance.controller";
import { ServiceInstanceResolver } from "./serviceInstance.resolver";

@Module({
  imports: [ServiceInstanceModuleBase],
  controllers: [ServiceInstanceController],
  providers: [ServiceInstanceService, ServiceInstanceResolver],
  exports: [ServiceInstanceService],
})
export class ServiceInstanceModule {}
