import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  CALCULATOR_BUTTONS,
} from '@/constants'
import {
  addOperandAtion,
  addOperationAtion,
} from '@/actions'
import { isOperand } from '@/helpers'

import { Container, Button, ButtonRow } from './components'

export default () => {
  const dispatch = useDispatch()

  const onButtonClick = e => {
    const value = e.target.dataset.value
    if (value) {
      const action = isOperand(value)
        ? addOperandAtion(value)
        : addOperationAtion(value)
      dispatch(action)
    }
  }

  return (
    <Container onClick={onButtonClick}>
      {CALCULATOR_BUTTONS.map((row, index) => {
        return (
          <ButtonRow key={index}>
            {row.map((value, indexValue) => (
              <Button data-value={value} key={indexValue}>
                {value}
              </Button>
            ))}
          </ButtonRow>
        )
      })}
    </Container>
  )
}
