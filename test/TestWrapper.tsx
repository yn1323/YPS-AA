import CssBaseline from '@material-ui/core/CssBaseline'
import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import { mount, render } from 'enzyme'
import React, { ReactElement, FC } from 'react'
import { act } from 'react-test-renderer'
import { RecoilRoot } from 'recoil'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { theme } from '@constant/theme'
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

// NOTE: https://github.com/enzymejs/enzyme/issues/2073#issuecomment-515817947
export const disableWarn = () => {
  const mockConsoleMethod = (realConsoleMethod: () => void) => {
    const ignoredMessages = ['test was not wrapped in act(...)']

    return (message: any, ...args: any) => {
      const containsIgnoredMessage = ignoredMessages.some(ignoredMessage =>
        message.includes(ignoredMessage)
      )

      if (!containsIgnoredMessage) {
        realConsoleMethod(message, ...args)
      }
    }
  }

  console.warn = jest.fn(mockConsoleMethod(console.warn))
  console.error = jest.fn(mockConsoleMethod(console.error))
}
