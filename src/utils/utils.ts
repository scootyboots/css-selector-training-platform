import {exercisePaths, exercisePathKeys} from '../router/paths'
import { ExercisePaths } from '../types/types'

export const findCurrentRouteIndex = (currentPath:string):number => {
  return exercisePathKeys.findIndex(key => exercisePaths[<keyof ExercisePaths>key] === currentPath)
}

export const findKeyFromPath = (path:string) => {
  let matchedKey = ''
  exercisePathKeys.forEach(key => {
    if (exercisePaths[<keyof ExercisePaths>key] === path) matchedKey = key
  })
  return matchedKey
}

export const findNextPreviousPath = (currentPath: string, direction: 'next' | 'prev') => {
  const currentPathIndex = findCurrentRouteIndex(currentPath)
  if (direction === 'next') {
    return exercisePaths[<keyof ExercisePaths>exercisePathKeys[currentPathIndex + 1]] ? exercisePaths[<keyof ExercisePaths>exercisePathKeys[currentPathIndex + 1]] : currentPath
  }
  if (direction === 'prev') {
    return exercisePaths[<keyof ExercisePaths>exercisePathKeys[currentPathIndex - 1]] ? exercisePaths[<keyof ExercisePaths>exercisePathKeys[currentPathIndex - 1]] : currentPath
  }
}

export const lastPathCheck = (currentPath:string):boolean => {
  const currentPathIndex = findCurrentRouteIndex(currentPath)
  return exercisePathKeys.length === currentPathIndex + 1 ? true : false
}