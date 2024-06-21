import { Stage } from "../stage/Stage";

export type Section = {
  content: string | null;
  createdAt: Date;
  id: string;
  stage?: Stage | null;
  title: string | null;
  updatedAt: Date;
};
