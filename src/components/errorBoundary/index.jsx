import React from 'react'
import pt from 'prop-types'

import { ErrorMessage } from './components'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo })
    console.error(error)
  }

  render() {
    if (this.state.error) { // использовать деструктаризацию, DRY
      return (
        <ErrorMessage>Something went wrong!</ErrorMessage>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: pt.node,
}
