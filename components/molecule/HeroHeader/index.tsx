import { Box, Button, Typography } from '@material-ui/core'
import Image from 'next/image'
import React from 'react'
import { mediaQueries } from 'src/constant/mixins'
import { SpOnlyBr, SpOnlySpan } from 'src/helper/styles'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

const CatchCopy = styled(Typography)`
  ${tw`flex justify-around mb-6`}
  font-size:0.8rem;
  ${mediaQueries('md')} {
    font-size: 1rem;
  }
`
const LoginButtonWrapper = styled.div`
  ${tw`flex justify-center`}
`

const BackGround = styled.div`
  ${tw`py-4 h-72 flex justify-around items-center`}
  background: linear-gradient(126deg, rgba(254, 204, 204,1) 24%,rgba(240, 193, 158,1) 45%);
`

const HeroHeader: React.FC = () => {
  return (
    <BackGround>
      <Image
        src="/images/storyset/time.svg"
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <div>
        <CatchCopy variant="subtitle1">
          共有できる
          <SpOnlyBr />
          無料のシフト管理
        </CatchCopy>
        <LoginButtonWrapper>
          <Button variant="contained" color="primary">
            ログイン<SpOnlySpan>してはじめる</SpOnlySpan>
          </Button>
        </LoginButtonWrapper>
      </div>
    </BackGround>
  )
}

export default HeroHeader
