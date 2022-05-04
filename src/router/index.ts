import { createRouter, createWebHistory  } from 'vue-router'
import exercisePaths from './paths'
import { trainingSitePaths } from './paths'

import SelectSingle from '../exercises/SelectSingle.vue'
import SelectAll from '../exercises/SelectAll.vue'
import SelectEveryOther from '../exercises/SelectEveryOther.vue'
import Condition from '../exercises/Condition.vue'
import ConditionNoMatch from '../exercises/ConditionNoMatch.vue'
import SelectAllAttributes from '../exercises/SelectAllAttributes.vue'
import Blog from '../components/training_sites/Blog.vue'

import ExerciseWrapper from '../components/ExerciseWrapper.vue'


export const routes = [
  { path: '/', redirect: exercisePaths.exampleSingle },
  { path: '/css-selector-training-platform/', redirect: exercisePaths.exampleSingle },
  { path: '/example-exercise/', redirect: exercisePaths.exampleSingle },
  { path: '/css-selector-training-platform/example-exercise/', redirect: exercisePaths.exampleSingle },
  { path: exercisePaths.exampleSingle, component:  ExerciseWrapper, props: {targetExerciseKey: 'exampleSingle'} },
  { path: exercisePaths.exampleAll, component:  ExerciseWrapper, props: {targetExerciseKey: 'exampleAll'} },
  { path: exercisePaths.exampleEveryOther, component:  ExerciseWrapper, props: {targetExerciseKey: 'exampleEveryOther'} },
  { path: exercisePaths.exampleCondition, component:  ExerciseWrapper, props: {targetExerciseKey: 'exampleConditionNoMatch'} },
  { path: exercisePaths.exampleConditionNoMatch, component:  ExerciseWrapper, props: {targetExerciseKey: 'exampleCondition'} },
  { path: exercisePaths.exampleSelectAllAttributes, component:  ExerciseWrapper, props: {targetExerciseKey: 'exampleSelectAllAttributes'} },
  // below this life should be paths to training sites
  { path: trainingSitePaths.blog, component: Blog}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
