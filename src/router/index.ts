import { createRouter, createWebHistory  } from 'vue-router'
import paths from './paths'
import HelloWorld from "../components/HelloWorld.vue"
import Exercise from "../components/Exercise.vue"

export const routes = [
  { path: paths.home, component: HelloWorld },
  { path: paths.exercise1, component: Exercise }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
