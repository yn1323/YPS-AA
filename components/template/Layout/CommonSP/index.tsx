import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import HeaderSp from '@organism/Header/HeaderSp'

interface Props {
  children: JSX.Element
}
const Container = styled.div`
  ${tw`relative`}
  min-height: calc(100vh - 3rem);
`

const WrapperFooter = styled.footer`
  ${tw`absolute bottom-0 left-0 w-full`}
`
const ComponentWrapper = styled.main`
  ${tw`mt-12 pb-14 sm:mt-16`}
`

const LayoutSp: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <HeaderSp />
    </Container>
  )
}

export default LayoutSp
