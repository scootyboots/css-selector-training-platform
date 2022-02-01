import paths from '../router/paths'
import { Paths } from '../types/types'

export const findCurrentRouteIndex = (currentPath:string):number => {
  const exerciseKeys = Object.keys(paths)
  const exercisePaths = exerciseKeys.map(key => paths[<keyof Paths>key])
  const currentPathIndex = exercisePaths.indexOf(currentPath)
  return currentPathIndex
}

// TODO: add more function to find useful information about the current rout
//// findNextPath and/or findPrevious path

export const findNextPreviousPath = (currentPath: string) => {
  const currentPathIndex = findCurrentRouteIndex(currentPath)
  
}

// TODO: remove this 

export const findRouteIndex = (currentPath:string, whichIndex: 'current-index' | 'next-path' | 'prev-path') => {
  const exerciseKeys = Object.keys(paths)
  const exercisePaths = exerciseKeys.map(key => paths[<keyof Paths>key])
  const currentPathIndex = exercisePaths.indexOf(currentPath)
  if (whichIndex === 'current-index') return currentPathIndex
  if (whichIndex === 'next-path') return 'something'
  if (whichIndex === 'prev-path') return ''
}