export enum SUPPORT_LOCALES {
  EN = "en",
  RU = "ru",
}

export type Locale = `${SUPPORT_LOCALES}`

export const DEFAULT_LOCALE = SUPPORT_LOCALES.RU;
export const FALLBACK_LOCALE = SUPPORT_LOCALES.EN;
