import { createI18n } from 'vue-i18n';
import { DEFAULT_LOCALE, FALLBACK_LOCALE } from './types';
import ru from './locales/ru.json'
import en from './locales/en.json'

const options = {
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  messages: {},
  globalInjection: true,
  devtools: true,
}

// TODO Разобраться с lazy loading для локали
export const i18n = createI18n({
  ...options,
  messages: {
    ru,
    en
  }
})

// export function setupI18n(locale = DEFAULT_LOCALE) {
//   const i18n = createI18n({
//     ...options,
//     locale
//   })
//   setI18nLanguage(i18n, locale)
//   return i18n
// }
//
// export function setI18nLanguage(i18n: I18n, locale: string) {
//   // @ts-ignore
//   i18n.global.locale.value = locale
//
//   document.querySelector('html').setAttribute('lang', locale)
// }
//
// export async function loadLocaleMessages(i18n: I18n, locale: string) {
//   const messages = await import(`./locales/${locale}.json`)
//
//   i18n.global.setLocaleMessage(locale, messages.default)
//
//   return nextTick()
// }
