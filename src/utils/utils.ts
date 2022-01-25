import paths from '../router/paths'
import { Paths } from '../types/types'

export const findCurrentRouteIndex = (currentPath:string):number => {
  const exerciseKeys = Object.keys(paths)
  const exercisePaths = exerciseKeys.map(key => paths[<keyof Paths>key])
  const currentPathIndex = exercisePaths.indexOf(currentPath)
  return currentPathIndex
}