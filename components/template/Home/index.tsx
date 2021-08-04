import HeroHeader from '@molecule/HeroHeader'
import IllustCards from '@molecule/IllustCards'
import IllustCardsSmall from '@molecule/IllustCardsSmall'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

const Root = styled.div`
  ${tw`w-full flex flex-col items-center`}
`
const HeroWrapper = styled.section`
  ${tw`w-full`}
`
const SubWrapper = styled.section`
  ${tw`w-full md:max-w-3xl`}
`

const Home: React.FC = () => {
  return (
    <Root>
      <HeroWrapper>
        <HeroHeader />
      </HeroWrapper>
      <SubWrapper>
        <IllustCards />
      </SubWrapper>
      <SubWrapper>
        <IllustCardsSmall />
      </SubWrapper>
    </Root>
  )
}

export default Home
