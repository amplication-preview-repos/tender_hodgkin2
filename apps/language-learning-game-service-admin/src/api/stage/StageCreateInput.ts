import { SectionCreateNestedManyWithoutStagesInput } from "./SectionCreateNestedManyWithoutStagesInput";

export type StageCreateInput = {
  description?: string | null;
  numberField?: number | null;
  sections?: SectionCreateNestedManyWithoutStagesInput;
};
