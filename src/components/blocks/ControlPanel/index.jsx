import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

import {
  Button,
  Container,
  Heading,
  Lable,
  Option,
  Select,
} from './components'

export default () => {
  return (
    <Container>
      <Heading>Settings</Heading>
      <Lable>
        Switch Theme
        <Select>
          <Option>Light theme</Option>
          <Option>Colored theme</Option>
          <Option>Dark theme</Option>
        </Select>
      </Lable>
      <Button>Clear All History</Button>
    </Container>
  )
}
