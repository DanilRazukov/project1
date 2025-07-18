import { RouteRecordRaw } from "vue-router"

const AsyncMainPage = () =>
  import("pages/MainPage/index").then((m) => m.MainPage)

const AsyncAboutPage = () =>
  import("pages/AboutPage/index").then((m) => m.AboutPage)

export enum APP_ROUTES {
  MAIN = "main",
  ABOUT = "about"
}

export const RoutePath: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: "/",
  [APP_ROUTES.ABOUT]: "/about"
}

export const routeConfig: RouteRecordRaw[] = [
  {
    path: RoutePath[APP_ROUTES.MAIN],
    component: AsyncMainPage,
    name: "MainPage",
  },
  {
    path: RoutePath[APP_ROUTES.ABOUT],
    component: AsyncAboutPage,
    name: "AboutPage"
  }
]
