import React, { lazy, Suspense } from 'react'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'
import {
  lightTheme,
  darkTheme,
  coloredTheme,
} from '@/theme'
import GlobalStyles from '@/globalStyles'

import Header from '@/components/common/Header'
import Loader from '@/components/common/Loader'

const HomePage = lazy(() =>
  import('@/components/pages/Home'),
)
const Settings = lazy(() =>
  import('@/components/pages/Settings'),
)

export default () => {
  const { theme } = useSelector(store => store.calculator)
  const currentTheme =
    theme === 'light'
      ? lightTheme
      : theme === 'dark'
      ? darkTheme
      : coloredTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              exact
              path={HOME_PAGE_ROUTE}
              component={HomePage}
            />
            <Route
              path={SETTINGS_PAGE_ROUTE}
              component={Settings}
            />
            <Redirect to={HOME_PAGE_ROUTE} />
          </Switch>
        </Suspense>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}
