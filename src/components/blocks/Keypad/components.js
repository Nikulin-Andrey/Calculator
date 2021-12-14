import styled from 'styled-components'

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px
    ${({ theme }) => theme.spacing(11)}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 84%;
`

export const Button = styled.button`
  width: ${({ theme }) => theme.spacing(15)}px;
  height: ${({ theme }) => theme.spacing(15)}px;
  border-radius: ${({ theme }) => theme.spacing(3)}px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid
    ${({ theme }) => theme.colors.bordersColor};
  font-size: ${({ theme }) => theme.spacing(6)}px;
  cursor: pointer;
`

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
`
