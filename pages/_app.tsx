import { ApolloProvider } from '@apollo/client'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import 'styles/globals.css'
import { useApollo } from '@constant/apollo/apolloClient'
import { theme } from '@constant/theme'
import Common from '@template/Layout/Common'

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
              <Common>
                <Component {...pageProps} />
              </Common>
            </RecoilRoot>
          </StyledComponentsThemeProvider>
        </MaterialUIThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  )
}

export default App
