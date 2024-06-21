import * as graphql from "@nestjs/graphql";
import { BonusResolverBase } from "./base/bonus.resolver.base";
import { Bonus } from "./base/Bonus";
import { BonusService } from "./bonus.service";

@graphql.Resolver(() => Bonus)
export class BonusResolver extends BonusResolverBase {
  constructor(protected readonly service: BonusService) {
    super(service);
  }
}
