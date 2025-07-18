import type { Ref } from "vue";
import { createI18n } from "vue-i18n";

import { DEFAULT_LOCALE, FALLBACK_LOCALE, Locale, SUPPORT_LOCALES } from "./types";

const options = {
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  messages: {},
  globalInjection: true,
  devtools: __IS_DEV__,
}

export const i18n = createI18n(options)

const loadedLanguages: Set<Locale> = new Set();

function setI18nLanguage(locale: Locale): void {
  (i18n.global.locale as unknown as Ref<Locale>).value = locale;
  document.querySelector("html")!.setAttribute("lang", locale);
}

async function loadLocaleMessages(locale: Locale): Promise<void> {
  if (loadedLanguages.has(locale)) {
    setI18nLanguage(locale);
    return;
  }

  try {
    const response = await fetch(`/locales/${locale}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const messages = await response.json();

    i18n.global.setLocaleMessage(locale, messages);
    loadedLanguages.add(locale);
    setI18nLanguage(locale);
  } catch (error) {
    console.error(`Ошибка загрузки перевода для ${locale}:`, error);
  }
}

export async function changeLocale(locale: Locale): Promise<void> {
  if (!(Object.values(SUPPORT_LOCALES)).includes(locale as SUPPORT_LOCALES)) {
    console.warn(`Локаль "${locale}" не поддерживается`);
    return;
  }

  await loadLocaleMessages(locale);
}

function isLocale(value: string): value is Locale {
  return (Object.values(SUPPORT_LOCALES) as string[]).includes(value);
}

export function getBrowserLocale(): Locale {
  const lang = navigator.language.split("-")[0];
  return isLocale(lang) ? lang : SUPPORT_LOCALES.EN;
}
