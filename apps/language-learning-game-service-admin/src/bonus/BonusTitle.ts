import { Bonus as TBonus } from "../api/bonus/Bonus";

export const BONUS_TITLE_FIELD = "title";

export const BonusTitle = (record: TBonus): string => {
  return record.title?.toString() || String(record.id);
};
