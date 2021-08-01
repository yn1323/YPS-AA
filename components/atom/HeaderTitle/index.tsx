import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import tw from 'tailwind-extended.macro'

const TitleText = styled(Typography)`
  ${tw`flex-grow `};
`
const ImageLogo = styled(Image)`
  margin-right: 8px;
`

const HeaderTitle: React.FC = ({ children }) => {
  return (
    <>
      <ImageLogo src="/images/logo.png" width={32} height={32} />
      <TitleText variant="h6">{children}</TitleText>
    </>
  )
}

export default HeaderTitle
