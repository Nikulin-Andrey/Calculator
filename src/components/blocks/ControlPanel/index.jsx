import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  THEMES,
  CLEAR_ALL,
} from '@/constants'
import { changeThemeAction, clearAllAtion } from '@/actions'

import {
  Button,
  Container,
  Heading,
  Lable,
  Option,
  Select,
} from './components'

export default () => {
  const { theme } = useSelector(store => store.calculator) // selector лучше вынести
  const dispatch = useDispatch()

  const changeTheme = e => { // add useCallback
    dispatch(changeThemeAction(e.target.value))
  }

  const clearHistory = () => { // add useCallback
    dispatch(clearAllAtion(true))
    alert('History has been cleared!')
  }

  return (
    <Container>
      <Heading>Settings</Heading>
      <Lable>
        Switch Theme
        <Select defaultValue={theme} onChange={changeTheme}>
          {THEMES.map((themeInfo, index) => ( // index использовать нельзя, надо ID
            <Option key={index} value={themeInfo.value}>
              {themeInfo.text}
            </Option>
          ))}
        </Select>
      </Lable>
      <Button onClick={clearHistory}>
        Clear All History
      </Button>
    </Container>
  )
}
