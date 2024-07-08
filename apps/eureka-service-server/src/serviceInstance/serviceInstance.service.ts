import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceInstanceServiceBase } from "./base/serviceInstance.service.base";

@Injectable()
export class ServiceInstanceService extends ServiceInstanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
