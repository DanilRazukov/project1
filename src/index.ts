import { createApp } from 'vue'
import App from "./app/App.vue";

import { createRouter, createWebHistory } from "vue-router";
import {routeConfig, i18n, getBrowserLocale, changeLocale } from "shared/config";

import "app/styles/index.scss"

const router = createRouter({
  history: createWebHistory(),
  routes: routeConfig
})
await changeLocale(getBrowserLocale())
const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount("#app")


