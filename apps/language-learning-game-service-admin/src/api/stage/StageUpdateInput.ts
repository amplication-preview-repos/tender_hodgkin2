import { SectionUpdateManyWithoutStagesInput } from "./SectionUpdateManyWithoutStagesInput";

export type StageUpdateInput = {
  description?: string | null;
  numberField?: number | null;
  sections?: SectionUpdateManyWithoutStagesInput;
};
