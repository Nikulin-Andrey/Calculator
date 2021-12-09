import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
export const LeftContent = styled.div`
  width: 80%;
  position: relative;
`

export const RightLine = styled.div`
  position: absolute;
  height: 95%;
  width: 0;
  border-right: 2px solid
    ${({ theme }) => theme.colors.bordersColor};
  left: 100%;
  top: 0;
  margin: auto 0;
`
export const TopLine = styled.div`
  width: 98%;
  height: 0;
  border-bottom: 2px solid
    ${({ theme }) => theme.colors.bordersColor};
`
