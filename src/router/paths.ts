import { ExercisePaths, TrainingSitePaths } from '../types/types'
import exerciseProps from '../exercise_props/exercise-props.json'

// TODO: refactor to use the exerciseProps json
export const exercisePaths:ExercisePaths = {
  exampleSingle: '/css-selector-training-platform/example-exercise/single',
  exampleAll: '/css-selector-training-platform/example-exercise/all',
  exampleEveryOther: '/css-selector-training-platform/example-exercise/every-other',
  exampleConditionNoMatch: '/css-selector-training-platform/example-exercise/condition-no-match',
  exampleCondition: '/css-selector-training-platform/example-exercise/condition',
  exampleSelectAllAttributes: '/css-selector-training-platform/example-exercise/select-all-attributes',
}

export const exercisePathKeys = Object.keys(exercisePaths)

export default exercisePaths

export const trainingSitePaths:TrainingSitePaths = {
  blog: '/css-selector-training-platform/training-sites/blog'
}