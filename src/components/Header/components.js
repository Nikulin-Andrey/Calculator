import styled from 'styled-components'

import theme from '@/theme'

export const Container = styled.header`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing(3)}px;
  font-size: ${theme.spacing(3)}px;
  display: flex;
  justify-content: space-between;
`

export const Links = styled.div`
  & a {
    color: ${theme.colors.white};
    margin-left: ${theme.spacing(3)}px;
    text-decoration: none;
  }
  & .active {
    text-decoration: underline;
  }
`
