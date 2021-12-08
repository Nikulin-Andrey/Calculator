import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing(4)}px
    ${({ theme }) => theme.spacing(11)}px;
  position: relative;
`

export const Result = styled.h1`
  font-size: ${({ theme }) => theme.spacing(6)}px;
  text-align: end;
`
