import React from 'react'
import { createHashRouter, RouteObject } from 'react-router-dom'
import { getDefaultLayout } from './components'
import HomePage from './pages'
import SignInPage from './pages/sign-in'
import SignUpPage from './pages/sign-up'
import ErrorPage from './components/error-page'
import SettingsLayout from './components/userDashboard/settingsLayout'

export const routerObjects: RouteObject[] = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/sign-in',
    Component: SignInPage,
  },
  {
    path: '/sign-up',
    Component: SignUpPage,
  },
  {
    path: '/settings',
    Component: SettingsLayout,
  },
]

export function createRouter(): ReturnType<typeof createHashRouter> {
  const routeWrappers = routerObjects.map((router) => {
    // @ts-ignore TODO: better type support
    const getLayout = router.Component?.getLayout || getDefaultLayout
    const Component = router.Component!
    const page = getLayout(<Component />)
    return {
      ...router,
      element: page,
      Component: null,
      ErrorBoundary: ErrorPage,
    }
  })
  return createHashRouter(routeWrappers)
}
