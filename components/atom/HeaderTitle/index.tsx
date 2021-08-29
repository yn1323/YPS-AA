import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import tw from 'tailwind-extended.macro'

interface Props {
  isLoggedIn: boolean
}

const Container = styled.div<{ $isLoggedIn: boolean }>`
  ${tw`flex`}
  flex-grow: ${({ $isLoggedIn }) => (!$isLoggedIn ? 1 : 0)};
`

const TitleText = styled(Typography)`
  ${tw`mr-12 ml-3`};
`
const ImageLogo = styled(Image)`
  ${tw`mr-2`}
`

const HeaderTitle: FC<Props> = ({ children, isLoggedIn }) => {
  return (
    <Container $isLoggedIn={isLoggedIn}>
      <ImageLogo src="/images/logo.png" width={32} height={32} />
      <TitleText variant="h6">{children}</TitleText>
    </Container>
  )
}

export default HeaderTitle
