import { SortOrder } from "../../util/SortOrder";

export type SectionOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  stageId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
