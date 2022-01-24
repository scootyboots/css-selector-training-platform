import { createRouter, createWebHistory  } from 'vue-router'
import paths from './paths'
import HelloWorld from "../components/HelloWorld.vue"
import Exercise from "../components/Exercise.vue"
import ExampleSingle from '../exercises/ExampleSingle.vue'
import ExampleAll from '../exercises/ExampleAll.vue'

export const routes = [
  { path: paths.home, component: HelloWorld },
  { path: paths.exercise1, component: Exercise },
  { path: paths.exampleSingle, component:  ExampleSingle },
  { path: paths.exampleAll, component: ExampleAll  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
