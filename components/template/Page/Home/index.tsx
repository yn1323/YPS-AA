import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import HeroHeader from '@molecule/Image/HeroHeader'
import IllustCards from '@molecule/Image/IllustCards'
import IllustCardsSmall from '@molecule/Image/IllustCardsSmall'
import { mediaQueries } from 'src/constant/mixins'

const Container = styled.div`
  ${tw`w-full flex flex-col items-center`}
`
const HeroWrapper = styled.section`
  ${tw`w-full mb-3 md:mb-6`}
`
const SubWrapper = styled.section`
  ${tw`w-full md:max-w-6xl mb-3 md:mb-6`}
`
const Summary = styled(Typography)`
  ${tw`my-14 mx-12 md:mx-64 flex justify-center tracking-widest text-2xl`}
  border-bottom: 2px solid #333333;
  font-size: 1.1rem;
  ${mediaQueries('md')} {
    font-size: 1.4rem;
  }
`

const Home: React.FC = () => {
  return (
    <Container>
      <HeroWrapper>
        <HeroHeader />
      </HeroWrapper>
      <SubWrapper>
        <Summary variant="h3">YPSでできること</Summary>
        <IllustCards />
      </SubWrapper>
      <SubWrapper>
        <Summary variant="h3">特徴</Summary>
        <IllustCardsSmall />
      </SubWrapper>
    </Container>
  )
}

export default Home