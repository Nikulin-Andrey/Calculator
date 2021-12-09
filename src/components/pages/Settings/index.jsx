import React from 'react'

import PageLayout from '@/components/layouts/PageLayout'
import Calculator from '@/containers/Calculator'

import { Container } from './components'
import ControlPanel from '@/components/blocks/ControlPanel'

export default () => {
  return (
    <PageLayout>
      <Container>
        <ControlPanel />
      </Container>
    </PageLayout>
  )
}
