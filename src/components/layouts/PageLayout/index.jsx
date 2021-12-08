import React from 'react'
import pt from 'prop-types'

import { Container } from './components'

const PageLayout = ({ children }) => (
  <Container>{children}</Container>
)

PageLayout.propTypes = {
  children: pt.node,
}

export default PageLayout
