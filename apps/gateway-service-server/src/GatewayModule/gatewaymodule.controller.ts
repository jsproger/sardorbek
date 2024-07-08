import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GatewayModuleService } from "./gatewaymodule.service";

@swagger.ApiTags("gatewayModules")
@common.Controller("gatewayModules")
export class GatewayModuleController {
  constructor(protected readonly service: GatewayModuleService) {}

  @common.Post("/auth/**")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AuthServiceRoute(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AuthServiceRoute(body);
      }

  @common.Get("/inventory/**")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InventoryServiceRoute(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.InventoryServiceRoute(body);
      }

  @common.Get("/orders/**")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async OrderServiceRoute(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.OrderServiceRoute(body);
      }

  @common.Get("/products/**")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProductServiceRoute(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProductServiceRoute(body);
      }
}
