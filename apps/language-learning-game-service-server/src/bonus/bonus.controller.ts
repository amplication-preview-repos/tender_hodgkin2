import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BonusService } from "./bonus.service";
import { BonusControllerBase } from "./base/bonus.controller.base";

@swagger.ApiTags("bonuses")
@common.Controller("bonuses")
export class BonusController extends BonusControllerBase {
  constructor(protected readonly service: BonusService) {
    super(service);
  }
}
