import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BonusWhereInput = {
  id?: StringFilter;
  points?: FloatNullableFilter;
  title?: StringNullableFilter;
};
