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
  getResultAtion,
  clearAllAtion,
  clearExprationAtion,
  openExprationAction,
  closeExprationAction,
} from '@/actions'
import { isOperand } from '@/helpers'

import { Container, Button, ButtonRow } from './components'

export default () => {
  const dispatch = useDispatch()

  const onButtonClick = e => { // add useCallback  && handleOperationClick
    const {value} = e.target.dataset // по-хорошему можно вынести и использовать редакс санки, чтобы компонент был максимально глупым :)
    if (!value) {
      return
    }
    switch (value) {
      case '=':
        dispatch(getResultAtion()) // можно сделать диспатч одного экшена и просто передавать тип, вместо того, чтобы создавать столько функций
        break
      case 'C':
        dispatch(clearAllAtion(false))
        break
      case 'CE':
        dispatch(clearExprationAtion())
        break
      case '(':
        dispatch(openExprationAction())
        break
      case ')':
        dispatch(closeExprationAction())
        break
      default:
        const action = isOperand(value) // лучше в таких случаях использовать if
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
