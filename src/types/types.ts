export interface ExercisePaths {
  exampleSingle: '/css-selector-training-platform/example-exercise/single',
  exampleAll: '/css-selector-training-platform/example-exercise/all',
  exampleEveryOther: '/css-selector-training-platform/example-exercise/every-other',
  exampleCondition: '/css-selector-training-platform/example-exercise/condition',
  exampleConditionNoMatch: '/css-selector-training-platform/example-exercise/condition-no-match',
  exampleSelectAllAttributes: '/css-selector-training-platform/example-exercise/select-all-attributes',
}

export interface TrainingSitePaths {
  blog: '/css-selector-training-platform/training-sites/blog'
}

export interface AllExercisePropsData {
  exampleSingle: ExerciseProps,
  exampleAll: ExerciseProps,
  exampleEveryOther: ExerciseProps,
  exampleCondition: ExerciseProps,
  exampleConditionNoMatch: ExerciseProps,
  exampleSelectAllAttributes: ExerciseProps
}

export interface ExerciseProps {
  promptHeader: string
  explanationArray: string[]
  correctSelectors: string[]
  selectAll: boolean
  browserUrl: string
  iframeSrcKey: keyof TrainingSitePaths
  modalDefaultDisplay: boolean
  allowModalToggle: boolean
  hint: string
  answerCondition?: {regex: RegExp, wantToMatch: boolean}
}

