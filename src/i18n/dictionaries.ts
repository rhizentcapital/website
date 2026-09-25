import type { Locale } from "./config";
import { en, type Dictionary } from "./en";
import { nl } from "./nl";
import { de } from "./de";

const dictionaries: Record<Locale, Dictionary> = { en, nl, de };

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];

export type { Dictionary };
