import { BonusWhereInput } from "./BonusWhereInput";
import { BonusOrderByInput } from "./BonusOrderByInput";

export type BonusFindManyArgs = {
  where?: BonusWhereInput;
  orderBy?: Array<BonusOrderByInput>;
  skip?: number;
  take?: number;
};
