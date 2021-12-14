import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing(8)}px;
  width: 100%;
`

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.spacing(6)}px;
  margin-bottom: ${({ theme }) => theme.spacing(6)}px;
`

export const Select = styled.select`
  padding: ${({ theme }) => theme.spacing(3)}px
    ${({ theme }) => theme.spacing(2)}px;
  width: ${({ theme }) => theme.spacing(40)}px;
  border: 2px solid
    ${({ theme }) => theme.colors.bordersColor};
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  font-size: ${({ theme }) => theme.spacing(3)}px;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`

export const Button = styled.button`
  display: block;
  padding: ${({ theme }) => theme.spacing(3)}px
    ${({ theme }) => theme.spacing(2)}px;
  width: ${({ theme }) => theme.spacing(40)}px;
  border: 2px solid
    ${({ theme }) => theme.colors.bordersColor};
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  font-size: ${({ theme }) => theme.spacing(3)}px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`

export const Lable = styled.label`
  font-size: ${({ theme }) => theme.spacing(2)}px;
  display: flex;
  flex-direction: column;
`

export const Option = styled.option``
