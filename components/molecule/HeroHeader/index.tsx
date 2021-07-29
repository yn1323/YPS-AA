import { Box, Button, Typography } from '@material-ui/core'
import Center from '@template/Center'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ButtonWrapper = styled.div`
  ${tw`my-8`}
`

const CatchCopy = styled(Typography)`
  ${tw`flex justify-around mb-6`}
`
const LoginButtonWrapper = styled.div`
  ${tw`flex justify-center`}
`

const BackGround = styled(Box)`
  ${tw`py-4 h-88 flex justify-around items-center`}
  background: linear-gradient(126deg, rgba(254, 204, 204,1) 24%,rgba(240, 193, 158,1) 45%);
`

const HeroHeader: React.FC = () => {
  return (
    <BackGround>
      <Image
        src="/images/storyset/time.svg"
        alt="Picture of the author"
        width={250}
        height={250}
      />
      <div>
        <CatchCopy variant="subtitle1">共有できる無料のシフト管理</CatchCopy>
        <LoginButtonWrapper>
          <Button variant="contained" color="primary">
            ログインしてはじめる
          </Button>
        </LoginButtonWrapper>
      </div>
    </BackGround>
  )
}

export default HeroHeader
