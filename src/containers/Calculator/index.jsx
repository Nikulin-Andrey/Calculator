import React from 'react'
import { useState } from 'react'

import Display from '@/components/blocks/Display'
import Keypad from '@/components/blocks/Keypad'

import {
  Container,
  LeftContent,
  RightLine,
  TopLine,
} from './components'

export default () => {
  return (
    <Container>
      <LeftContent>
        <Display result="4500.603" />
        <TopLine />
        <Keypad />
      </LeftContent>
      <RightLine />
    </Container>
  )
}
