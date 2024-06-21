import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StageWhereUniqueInput } from "../stage/StageWhereUniqueInput";

export type SectionWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  stage?: StageWhereUniqueInput;
  title?: StringNullableFilter;
};
