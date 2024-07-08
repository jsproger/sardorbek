import * as graphql from "@nestjs/graphql";
import { GatewayModuleService } from "./gatewaymodule.service";

export class GatewayModuleResolver {
  constructor(protected readonly service: GatewayModuleService) {}

  @graphql.Mutation(() => String)
  async AuthServiceRoute(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AuthServiceRoute(args);
  }

  @graphql.Query(() => String)
  async InventoryServiceRoute(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.InventoryServiceRoute(args);
  }

  @graphql.Query(() => String)
  async OrderServiceRoute(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.OrderServiceRoute(args);
  }

  @graphql.Query(() => String)
  async ProductServiceRoute(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ProductServiceRoute(args);
  }
}
