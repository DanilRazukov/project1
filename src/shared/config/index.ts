import { i18n, getBrowserLocale, changeLocale } from "./i18n/setupI18n"
import { SUPPORT_LOCALES, DEFAULT_LOCALE, FALLBACK_LOCALE } from "./i18n/types"
import { routeConfig, RoutePath, APP_ROUTES } from "./routeConfig/routeConfig"

export {
  routeConfig,
  RoutePath,
  APP_ROUTES,
  SUPPORT_LOCALES,
  DEFAULT_LOCALE,
  FALLBACK_LOCALE,
  i18n,
  changeLocale,
  getBrowserLocale
}
