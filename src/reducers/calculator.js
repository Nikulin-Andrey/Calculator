import { handleActions } from 'redux-actions'

import {
  addOperandAtion,
  addOperationAtion,
  getResultAtion,
  clearAllAtion,
  clearExprationAtion,
  changeThemeAction,
} from '@/actions'
import { getDisplayValue, getCommand } from '@/helpers'

const INITIAL_STATE = {
  displayValue: '0',
  result: 0,
  theme: 'light',
}

export default handleActions(
  new Map([
    [
      addOperandAtion,
      (state, action) => ({
        ...state,
        displayValue: getDisplayValue(
          state.displayValue,
          action.payload,
        ),
      }),
    ],
    [addOperationAtion, getCommand],
    [
      getResultAtion,
      (state, action) => {
        console.log('result')
        return {
          ...state,
        }
      },
    ],
    [
      clearExprationAtion,
      (state, action) => {
        console.log('CE')
        return {
          ...state,
        }
      },
    ],
    [
      clearAllAtion,
      (state, action) => ({
        ...state,
        displayValue: '0',
        result: 0,
      }),
    ],
    [
      changeThemeAction,
      (state, action) => ({
        ...state,
        theme: action.payload,
      }),
    ],
  ]),
  INITIAL_STATE,
)
