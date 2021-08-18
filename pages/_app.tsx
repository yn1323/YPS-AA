import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import { RecoilRoot } from 'recoil'

import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import 'styles/globals.css'
import Layout from '@template/Layout'
import { theme } from '@constant/theme'
import { useApollo } from '@constant/apollo/apolloClient'

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps)

  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <StylesProvider injectFirst>
        <MaterialUIThemeProvider theme={theme}>
          <StyledComponentsThemeProvider theme={theme}>
            <CssBaseline />
            <RecoilRoot>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </RecoilRoot>
          </StyledComponentsThemeProvider>
        </MaterialUIThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  )
}

export default App
