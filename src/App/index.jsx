import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

import Loader from '@/components/Loader'

const HomePage = lazy(() => import('@/pages/Home'))
const Settings = lazy(() => import('@/pages/Settings'))

export default () => (
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
)
