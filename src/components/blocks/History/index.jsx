import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
  const history = useSelector(
    store => store.calculator.history,
  )

  return (
    <Container>
      <Heading>History</Heading>
      <ExpretionsContainer>
        {history.map((expretion, index) => (
          <Expretion key={index}>{expretion}</Expretion>
        ))}
      </ExpretionsContainer>
    </Container>
  )
}
