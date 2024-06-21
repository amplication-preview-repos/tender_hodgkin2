import { Section } from "../section/Section";

export type Stage = {
  createdAt: Date;
  description: string | null;
  id: string;
  numberField: number | null;
  sections?: Array<Section>;
  updatedAt: Date;
};
