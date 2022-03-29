import { createRouter, createWebHistory  } from 'vue-router'
import exercisePaths from './paths'

import SelectSingle from '../exercises/SelectSingle.vue'
import SelectAll from '../exercises/SelectAll.vue'
import SelectEveryOther from '../exercises/SelectEveryOther.vue'
import Condition from '../exercises/Condition.vue'
import ConditionNoMatch from '../exercises/ConditionNoMatch.vue'
import SelectAllAttributes from '../exercises/SelectAllAttributes.vue'


export const routes = [
  { path: '/', redirect: exercisePaths.exampleSingle },
  { path: '/css-selector-training-platform/', redirect: exercisePaths.exampleSingle },
  { path: '/example-exercise/', redirect: exercisePaths.exampleSingle },
  { path: '/css-selector-training-platform/example-exercise/', redirect: exercisePaths.exampleSingle },
  { path: exercisePaths.exampleSingle, component:  SelectSingle },
  { path: exercisePaths.exampleAll, component: SelectAll },
  { path: exercisePaths.exampleEveryOther, component: SelectEveryOther },
  { path: exercisePaths.exampleCondition, component:  Condition },
  { path: exercisePaths.exampleConditionNoMatch, component:  ConditionNoMatch },
  { path: exercisePaths.exampleSelectAllAttributes, component:  SelectAllAttributes },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
