import React from 'react'

import ControlPanel from '@/components/blocks/ControlPanel'
import PageLayout from '@/components/layouts/PageLayout'
import Calculator from '@/containers/Calculator'

import { Container } from './components'

export default () => {
  return (
    <PageLayout>
      <Container>
        <ControlPanel />
      </Container>
    </PageLayout>
  )
}
