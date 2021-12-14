import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  THEMES,
} from '@/constants'
import { changeThemeAction } from '@/actions'

import {
  Button,
  Container,
  Heading,
  Lable,
  Option,
  Select,
} from './components'

export default () => {
  const { theme } = useSelector(store => store.calculator)
  const dispatch = useDispatch()

  const changeTheme = e => {
    dispatch(changeThemeAction(e.target.value))
  }

  return (
    <Container>
      <Heading>Settings</Heading>
      <Lable>
        Switch Theme
        <Select defaultValue={theme} onChange={changeTheme}>
          {THEMES.map((themeInfo, index) => (
            <Option key={index} value={themeInfo.value}>
              {themeInfo.text}
            </Option>
          ))}
        </Select>
      </Lable>
      <Button>Clear All History</Button>
    </Container>
  )
}
