import { Module } from "@nestjs/common";
import { GatewayModuleService } from "./gatewaymodule.service";
import { GatewayModuleController } from "./gatewaymodule.controller";
import { GatewayModuleResolver } from "./gatewaymodule.resolver";

@Module({
  controllers: [GatewayModuleController],
  providers: [GatewayModuleService, GatewayModuleResolver],
  exports: [GatewayModuleService],
})
export class GatewayModuleModule {}
