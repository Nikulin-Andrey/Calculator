import styled from 'styled-components'

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px
    ${({ theme }) => theme.spacing(5)}px;
  font-size: ${({ theme }) => theme.spacing(3)}px;
  width: 20%; // лучше 100 процентов, а padding-ами делать отступы
  height: 95%; // лучше 100 процентов, а padding-ами делать отступы
`

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
  font-weight: 300;
`
export const ExpretionsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(6)}px 0;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing(1)}px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.spacing(1)}px;
  }
`
export const Expretion = styled.div`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
`
