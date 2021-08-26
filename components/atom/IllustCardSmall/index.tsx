import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import Image from 'next/image'
import { mediaQueries } from 'src/constant/mixins'
import { replaceWithBrTag } from '@helper/reactHelpers'

interface Props {
  isGray?: boolean
  imageUri: string
  text: string
}

const Container = styled.div<{ isGrayBg?: boolean }>`
  ${tw`w-1/3 h-48 flex flex-col justify-center items-center p-4`}
  background: ${({ theme, isGrayBg }) =>
    isGrayBg ? theme.palette.secondary.main : ''};
`
const ImageWrapper = styled.div`
  ${tw`h-3/4 flex justify-center items-center`}
`
const TextWrapper = styled.div`
  ${tw`h-1/4 flex items-end font-semibold`}
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.6rem;
  ${mediaQueries('md')} {
    font-size: 0.9rem;
  }
`

const IllustCardSmall: FC<Props> = ({ isGray = false, imageUri, text }) => {
  return (
    <Container isGrayBg={isGray}>
      <ImageWrapper>
        <Image
          src={imageUri}
          height={'80%'}
          width={'80%'}
          objectFit="contain"
        />
      </ImageWrapper>
      <TextWrapper>{replaceWithBrTag(text)}</TextWrapper>
    </Container>
  )
}

export default IllustCardSmall
