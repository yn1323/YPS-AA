import React, { ReactElement, FC } from 'react'

import { RecoilRoot } from 'recoil'

import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { theme } from '@constant/theme'
import { mount } from 'enzyme'
interface Props {
  children: JSX.Element
}

export const ThemeProvideWrapper: FC<Props> = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline>
            <RecoilRoot>{children}</RecoilRoot>
          </CssBaseline>
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  )
}

export const mountWithTheme = (tree: ReactElement) =>
  mount(tree, {
    wrappingComponent: ThemeProvideWrapper,
  })
