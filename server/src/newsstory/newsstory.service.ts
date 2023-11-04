import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewsstoryServiceBase } from "./base/newsstory.service.base";

@Injectable()
export class NewsstoryService extends NewsstoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
