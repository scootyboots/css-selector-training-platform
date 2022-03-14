import { createRouter, createWebHistory  } from 'vue-router'
import exercisePaths from './paths'
import HelloWorld from "../components/HelloWorld.vue"
import Exercise from "../components/Exercise.vue"
import ExampleSingle from '../exercises/ExampleSingle.vue'
import ExampleAll from '../exercises/ExampleAll.vue'
import ExampleTesting from '../exercises/ExampleTesting.vue'

export const routes = [
  // TODO: add forwarding for / and /example-exercise routes 
  { path: '/', redirect: exercisePaths.exampleSingle },
  { path: '/example-exercise/', redirect: exercisePaths.exampleSingle },
  { path: exercisePaths.exampleSingle, component:  ExampleSingle },
  { path: exercisePaths.exampleAll, component: ExampleAll },
  { path: exercisePaths.exampleTesting, component: ExampleTesting }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
