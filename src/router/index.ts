import { createRouter, createWebHistory  } from 'vue-router'
import paths from './paths'
import HelloWorld from "../components/HelloWorld.vue"
import Exercise from "../components/Exercise.vue"
import ExampleSingle from '../exercises/ExampleSingle.vue'
import ExampleAll from '../exercises/ExampleAll.vue'
import ExampleTesting from '../exercises/ExampleTesting.vue'

export const routes = [
  { path: paths.home, redirect: () => paths.exampleSingle },
  { path: '/example-exercise', redirect: () => paths.exampleSingle },
  // { path: paths.home, component: ExampleSingle },
  { path: paths.exampleSingle, component:  ExampleSingle },
  { path: paths.exampleAll, component: ExampleAll },
  { path: paths.exampleTesting, component: ExampleTesting }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
