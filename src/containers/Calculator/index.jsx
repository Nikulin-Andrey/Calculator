import { useState } from React from 'react'


import Display from '@/components/blocks/Display'
import Keypad from '@/components/blocks/Keypad'
import History from '@/components/blocks/History'
import ErrorBoundary from '@/components/errorBoundary'

import {
  Container,
  LeftContent,
  RightLine,
  TopLine,
} from './components'

export default () => {
  return (
    <Container>
      <ErrorBoundary>
        <LeftContent>
          <Display />
          <TopLine />
          <Keypad />
          <RightLine />
        </LeftContent>
        <History />
      </ErrorBoundary>
    </Container>
  )
}
