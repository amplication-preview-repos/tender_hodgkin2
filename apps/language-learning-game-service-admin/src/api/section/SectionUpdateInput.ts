import { StageWhereUniqueInput } from "../stage/StageWhereUniqueInput";

export type SectionUpdateInput = {
  content?: string | null;
  stage?: StageWhereUniqueInput | null;
  title?: string | null;
};
