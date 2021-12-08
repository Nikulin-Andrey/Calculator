import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

import { Container, Result } from './components'

export default ({ result }) => {
  return (
    <Container>
      <Result>{result}</Result>
    </Container>
  )
}
