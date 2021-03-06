import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/constant/theme'
import { RecoilRoot } from 'recoil'
import * as nextImage from 'next/image'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['atom', 'molecule', 'organism', 'template', 'page'],
    },
  },
}

const withThemeProvider = (Story, context) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Story {...context} />
          </RecoilRoot>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}
export const decorators = [withThemeProvider]

// Next.jsのimgを上書き
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} style={{ objectFit: 'contain' }} />,
})
