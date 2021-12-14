import { handleActions } from 'redux-actions'

import {
  addOperandAtion,
  addOperationAtion,
  changeThemeAction,
} from '@/actions'

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
        displayValue: action.payload,
      }),
    ],
    [
      addOperationAtion,
      (state, action) => ({
        ...state,
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
