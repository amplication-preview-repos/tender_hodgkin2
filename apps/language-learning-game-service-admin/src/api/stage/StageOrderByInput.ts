import { SortOrder } from "../../util/SortOrder";

export type StageOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  numberField?: SortOrder;
  updatedAt?: SortOrder;
};
