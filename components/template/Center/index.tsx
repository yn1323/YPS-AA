import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import { mediaQueries } from '@constant/mixins'
import { theme } from '@constant/theme'

const Container = styled.main`
  ${tw`flex justify-center`}
`
const CenterDiv = styled.div`
  ${tw`flex justify-center items-center w-full`}
  ${mediaQueries('lg')} {
    width: ${theme.breakpoints.values.lg}px;
  }
`

const Center: React.FC = ({ children }) => {
  return (
    <Container>
      <CenterDiv>{children}</CenterDiv>
    </Container>
  )
}

export default Center
