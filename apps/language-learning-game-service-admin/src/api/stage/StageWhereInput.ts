import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SectionListRelationFilter } from "../section/SectionListRelationFilter";

export type StageWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  numberField?: IntNullableFilter;
  sections?: SectionListRelationFilter;
};
