import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BonusServiceBase } from "./base/bonus.service.base";

@Injectable()
export class BonusService extends BonusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
