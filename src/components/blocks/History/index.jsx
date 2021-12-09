import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

import {
  Container,
  Expretion,
  Heading,
  ExpretionsContainer,
} from './components'

export default () => {
  return (
    <Container>
      <Heading>History</Heading>
      <ExpretionsContainer>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 * 1000</Expretion>
        <Expretion>14 + 12</Expretion>
        <Expretion>1 + 2</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 + 1</Expretion>
        <Expretion>1 * 1000</Expretion>
        <Expretion>14 + 12</Expretion>
        <Expretion>1 + 2</Expretion>
      </ExpretionsContainer>
    </Container>
  )
}
