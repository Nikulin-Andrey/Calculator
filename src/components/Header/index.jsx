import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

import { Container, Links } from './components'

export default () => {
  return (
    <Container>
      Calculator App
      <Links>
        <NavLink to={HOME_PAGE_ROUTE}>HOME</NavLink>
        <NavLink to={SETTINGS_PAGE_ROUTE}>SETTINGS</NavLink>
      </Links>
    </Container>
  )
}
