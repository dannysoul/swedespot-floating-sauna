import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import BookingPage from './views/BookingPage.vue'
import AboutPage from './views/AboutPage.vue'
import ContactPage from './views/ContactPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/booking', component: BookingPage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
