import { Box, Button } from '@material-ui/core'
import Center from '@template/Center'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ButtonWrapper = styled.div`
  ${tw`my-8`}
`

const Root = styled(Box)`
  ${tw`py-4`}
  background: linear-gradient(126.80292423448475deg, rgba(194, 176, 105,1) 24.9765625%,rgba(194, 176, 105,1) 45.40169270833333%,rgba(232, 149, 149,1) 67.7890625%);
`

const HeroHeader: React.FC = () => {
  return (
    <Root>
      <Center>
        <Image
          src="/images/mainIcon.png"
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </Center>
      <ButtonWrapper>
        <Center>
          <Button variant="contained" color="primary">
            ログインしてはじめる
          </Button>
        </Center>
      </ButtonWrapper>
    </Root>
  )
}

export default HeroHeader
