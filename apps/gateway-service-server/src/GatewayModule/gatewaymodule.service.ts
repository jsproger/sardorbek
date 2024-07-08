import { Injectable } from "@nestjs/common";

@Injectable()
export class GatewayModuleService {
  constructor() {}
  async AuthServiceRoute(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async InventoryServiceRoute(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async OrderServiceRoute(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ProductServiceRoute(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
