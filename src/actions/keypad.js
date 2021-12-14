import { createAction } from '@reduxjs/toolkit'

import { ADD_OPERAND, ADD_OPERATION } from '@/constants'

export const addOperandAtion = createAction(ADD_OPERAND)
export const addOperationAtion = createAction(ADD_OPERATION)
