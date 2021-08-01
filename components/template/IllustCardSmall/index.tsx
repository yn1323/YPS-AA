import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import Image from 'next/image'
import { replaceWithBrTag } from '@helper'

interface Props {
  isGray?: boolean
  imageUri: string
  text: string
}

const Root = styled.div<{ isGrayBg?: boolean }>`
  ${tw`w-1/3 h-48 flex flex-col justify-center items-center p-4`}
  background: ${({ theme, isGrayBg }) =>
    isGrayBg ? theme.palette.secondary.main : ''};
`
const ImageWrapper = styled.div`
  ${tw`h-3/4`}
`
const TextWrapper = styled.div`
  ${tw`h-1/4 flex items-end text-lg font-semibold`}
  color: ${({ theme }) => theme.palette.text.secondary};
`

const IllustCardSmall: React.FC<Props> = ({
  isGray = false,
  imageUri,
  text,
}) => {
  return (
    <Root isGrayBg={isGray}>
      <ImageWrapper>
        <Image
          src={imageUri}
          height={'100%'}
          width={'100%'}
          objectFit="contain"
        />
      </ImageWrapper>
      <TextWrapper>{replaceWithBrTag(text)}</TextWrapper>
    </Root>
  )
}

export default IllustCardSmall
