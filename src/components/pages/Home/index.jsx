import React from 'react'

import PageLayout from '@/components/layouts/PageLayout'
import Calculator from '@/containers/Calculator'

import { Container } from './components'

export default () => {
  return (
    <PageLayout>
      <Container>
        <Calculator />
      </Container>
    </PageLayout>
  )
}
