import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;

  padding: ${({ theme }) => theme.spaces[4]}px;
`

export const Heading = styled.h3``
