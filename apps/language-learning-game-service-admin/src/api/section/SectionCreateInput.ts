import { StageWhereUniqueInput } from "../stage/StageWhereUniqueInput";

export type SectionCreateInput = {
  content?: string | null;
  stage?: StageWhereUniqueInput | null;
  title?: string | null;
};
