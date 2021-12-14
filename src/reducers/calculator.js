import { handleActions } from 'redux-actions'

import {
  addOperandAtion,
  addOperationAtion,
} from '@/actions'

const INITIAL_STATE = {
  displayValue: '0',
  result: 0,
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
  ]),
  INITIAL_STATE,
)
