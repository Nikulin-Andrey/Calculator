import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(3)}px;
  font-size: ${({ theme }) => theme.spacing(3)}px;
  display: flex;
  justify-content: space-between;
`

export const Links = styled.div`
  & a {
    color: ${({ theme }) => theme.colors.white};
    margin-left: ${({ theme }) => theme.spacing(3)}px;
    text-decoration: none;
  }
  & .active {
    text-decoration: underline;
  }
`
