import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

import { Container, Result } from './components'

export default () => {
  const { displayValue } = useSelector(
    store => store.calculator,
  )
  return (
    <Container>
      <Result>{displayValue}</Result>
    </Container>
  )
}
