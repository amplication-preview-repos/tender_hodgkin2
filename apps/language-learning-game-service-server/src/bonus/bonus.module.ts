import { Module } from "@nestjs/common";
import { BonusModuleBase } from "./base/bonus.module.base";
import { BonusService } from "./bonus.service";
import { BonusController } from "./bonus.controller";
import { BonusResolver } from "./bonus.resolver";

@Module({
  imports: [BonusModuleBase],
  controllers: [BonusController],
  providers: [BonusService, BonusResolver],
  exports: [BonusService],
})
export class BonusModule {}
