import { createRouter, createWebHistory  } from 'vue-router'

import { trainingSitePaths } from './paths'
import exerciseProps from '../exercise_props/exercise-props.json'

import ExerciseWrapper from '../components/ExerciseWrapper.vue'
import Blog from '../components/training_sites/Blog.vue'


export const routes = [
  { path: '/', redirect: exerciseProps.exampleSingle.path },
  { path: '/css-selector-training-platform/', redirect: exerciseProps.exampleSingle.path },
  { path: '/example-exercise/', redirect: exerciseProps.exampleSingle.path },
  { path: '/css-selector-training-platform/example-exercise/', redirect: exerciseProps.exampleSingle.path },
  { path: exerciseProps.exampleSingle.path, component:  ExerciseWrapper, props: {targetExerciseKey: 'exampleSingle'} },
  { path: exerciseProps.exampleAll.path, component:  ExerciseWrapper, props: {targetExerciseKey: 'exampleAll'} },
  { path: exerciseProps.exampleConditionNoMatch.path, component:  ExerciseWrapper, props: {targetExerciseKey: 'exampleConditionNoMatch'} },
  { path: exerciseProps.exampleCondition.path, component:  ExerciseWrapper, props: {targetExerciseKey: 'exampleCondition'} },
  { path: exerciseProps.exampleEveryOther.path, component:  ExerciseWrapper, props: {targetExerciseKey: 'exampleEveryOther'} },
  { path: exerciseProps.exampleSelectAllAttributes.path, component:  ExerciseWrapper, props: {targetExerciseKey: 'exampleSelectAllAttributes'} },
  // below this life should be paths to training sites
  { path: trainingSitePaths.blog, component: Blog}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
