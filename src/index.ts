import { createApp } from 'vue'
import App from "./app/App.vue";

import { createRouter, createWebHistory } from "vue-router";
import { routeConfig } from "shared/config";

import "app/styles/index.scss"

const router = createRouter({
  history: createWebHistory(),
  routes: routeConfig
})

const app = createApp(App)
app.use(router)
app.mount("#app")
