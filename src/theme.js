import { css } from 'styled-components'

const THEME_UNIT_SIZE = 7

const spacing = margins => THEME_UNIT_SIZE * margins

const font = 'sans-serif'

// Color palette
const black = '#000000'
const white = '#ffffff'
const error = '#c86464'
const primary = '#434343'
const secondary = '#f2f2f2'
const secondaryLight = '#6a6b7b'
const bordersColor = '#707070'

const lightColors = {
  black: '#000000',
  white: '#ffffff',
  error: '#c86464',
  primary: '#434343',
  secondary: '#f2f2f2',
  secondaryLight: '#6a6b7b',
  bordersColor: '#707070',
}

const darkColors = {
  black: '#CCCCCC',
  white: '#31314F',
  error: '#c86464',
  primary: '#6B6B6B',
  secondary: '#34543C',
  secondaryLight: '#6a6b7b',
  bordersColor: '#707070',
}

const coloredColors = {
  black: '#000000',
  white: '#9DF5BB',
  error: '#c86464',
  primary: '#6F21B8',
  secondary: '#16A849',
  secondaryLight: '#9DF5BB',
  bordersColor: '#707070',
}

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const lightTheme = {
  above,
  below,
  font,
  spacing,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: lightColors,
}
export const darkTheme = {
  ...lightTheme,
  colors: darkColors,
}
export const coloredTheme = {
  ...lightTheme,
  colors: coloredColors,
}
export default {
  above,
  below,
  font,
  spacing,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
    bordersColor,
  },
}
