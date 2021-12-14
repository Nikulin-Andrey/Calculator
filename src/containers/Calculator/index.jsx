import React from 'react'
import { useState } from 'react'

import Display from '@/components/blocks/Display'
import Keypad from '@/components/blocks/Keypad'
import History from '@/components/blocks/History'

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
        <Display />
        <TopLine />
        <Keypad />
        <RightLine />
      </LeftContent>
      <History />
    </Container>
  )
}
