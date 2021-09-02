import { createTheme, Theme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#FF8E3C',
      // light: '#F8F8F8',
      // dark: '',
      contrastText: '#EFEFEF',
    },
    secondary: {
      main: '#EFF0F3',
      light: '#F8F8F8',
      // dark: '',
      contrastText: '#0D0D0D',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFE',
    },
    text: {
      primary: '#111',
      secondary: '#444',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1080,
      xl: 1536,
    },
  },
})
