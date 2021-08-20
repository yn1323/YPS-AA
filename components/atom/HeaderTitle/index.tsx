import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import tw from 'tailwind-extended.macro'

const TitleText = styled(Typography)`
  ${tw`flex-grow ml-3`};
`
const ImageLogo = styled(Image)`
  ${tw`mr-2`}
`

const HeaderTitle: FC = ({ children }) => {
  return (
    <>
      <ImageLogo src="/images/logo.png" width={32} height={32} />
      <TitleText variant="h6">{children}</TitleText>
    </>
  )
}

export default HeaderTitle
