import React from 'react'

import { RecoilRoot } from 'recoil'

import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { theme } from '@constant/theme'

interface Props {
  children: JSX.Element
}

const TestWrapper: React.FC<Props> = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <RecoilRoot>{children}</RecoilRoot>
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  )
}

export default TestWrapper
