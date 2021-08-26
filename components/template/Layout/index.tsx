import React from 'react'
import Header from '@organism/Header'
import Footer from '@molecule/Footer'

import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import { mediaQueries } from 'src/constant/mixins'

interface Props {
  children: JSX.Element
}
const Container = styled.div`
  ${tw`relative`}
  min-height: calc(100vh - 3rem);
  ${mediaQueries('sm')} {
    min-height: calc(100vh - 4rem);
  }
`
const WrapperFooter = styled.footer`
  ${tw`absolute bottom-0 left-0 w-full`}
`
const ComponentWrapper = styled.main`
  ${tw`mt-12 pb-14 sm:mt-16`}
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <ComponentWrapper>{children}</ComponentWrapper>
      <WrapperFooter>
        <Footer />
      </WrapperFooter>
    </Container>
  )
}

export default Layout
