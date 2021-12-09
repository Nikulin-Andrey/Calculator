import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 auto;
  width: 100%;
  height: 89%;
  padding: ${({ theme }) => theme.spacing(2)}px
    ${({ theme }) => theme.spacing(4)}px;
`
