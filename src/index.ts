import { createApp } from 'vue'
import App from "./App.vue";

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import '@/styles/index.scss'

const AsyncMainPage = () => import("./pages/MainPage/MainPage.vue")
const AsyncAboutPage = () => import("./pages/AboutPage/AboutPage.vue")

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AsyncMainPage,
    name: 'Main'
  },
  { path: '/about',
    component: AsyncAboutPage,
    name: 'About'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount("#app")
