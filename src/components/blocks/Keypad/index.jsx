import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

import { Container, Button, ButtonRow } from './components'

export default () => {
  return (
    <Container>
      <ButtonRow>
        <Button>C</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>*</Button>
      </ButtonRow>
      <ButtonRow>
        <Button>-</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>\</Button>
      </ButtonRow>
      <ButtonRow>
        <Button>+</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>=</Button>
      </ButtonRow>
      <ButtonRow>
        <Button>.</Button>
        <Button>(</Button>
        <Button>0</Button>
        <Button>)</Button>
        <Button>CE</Button>
      </ButtonRow>
    </Container>
  )
}
