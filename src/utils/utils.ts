import { routes } from '../router/index'

export const findCurrentRouteIndex = (currentPath:string):number => {
  return routes.findIndex(route => route.path === currentPath)
}

export const findNextPreviousPath = (currentPath: string, direction: 'next' | 'prev') => {
  const currentRouteIndex = findCurrentRouteIndex(currentPath)
  console.log('current index:', currentRouteIndex)
  console.log('routes', routes)
  console.log('next', routes[currentRouteIndex + 1])
  if (direction === 'next') {
    return routes[currentRouteIndex + 1] ? routes[currentRouteIndex + 1].path : currentPath
  }
  if (direction === 'prev') {
    return routes[currentRouteIndex - 1] ? routes[currentRouteIndex - 1].path : currentPath
  }
}

export const lastPathCheck = (currentPath:string):boolean => {
  const currentIndex = findCurrentRouteIndex(currentPath)
  return routes.length === currentIndex + 1 ? true : false
}