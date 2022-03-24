import { createRouter, createWebHistory  } from 'vue-router'
import exercisePaths from './paths'

// import ExampleSingle from '../exercises/ExampleSingle.vue'
// import ExampleAll from '../exercises/ExampleAll.vue'
import SelectSingle from '../exercises/SelectSingle.vue'
import SelectAll from '../exercises/SelectAll.vue'
import SelectEveryOther from '../exercises/SelectEveryOther.vue'
import ExampleTesting from '../exercises/ExampleTesting.vue'
import ExampleTesting2Vue from '../exercises/ExampleTesting2.vue'

export const routes = [
  { path: '/', redirect: exercisePaths.exampleSingle },
  { path: '/example-exercise/', redirect: exercisePaths.exampleSingle },
  { path: exercisePaths.exampleSingle, component:  SelectSingle },
  { path: exercisePaths.exampleAll, component: SelectAll },
  { path: exercisePaths.exampleEveryOther, component: SelectEveryOther },
  { path: exercisePaths.exampleTestingTwo, component:  ExampleTesting2Vue },
  { path: exercisePaths.exampleTestingThree, component:  ExampleTesting2Vue },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
