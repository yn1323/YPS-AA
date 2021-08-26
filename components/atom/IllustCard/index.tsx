import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import Image from 'next/image'
import { replaceWithBrTag } from '@helper/reactHelpers'

interface Props {
  grayIsOnRight: boolean
  imageUri: string
  text: string
  size?: number
}

const Container = styled.div`
  ${tw`h-48 flex`}
`

const Background = styled.div<{ isGrayBg?: boolean }>`
  ${tw`w-1/2 h-48 flex justify-center items-center`}
  background: ${({ theme, isGrayBg }) =>
    isGrayBg ? theme.palette.secondary.main : ''};
`

const IllustCard: FC<Props> = ({
  grayIsOnRight,
  imageUri,
  text,
  size = 170,
}) => {
  const Message = <Typography>{replaceWithBrTag(text)}</Typography>
  const Illust = <Image src={imageUri} width={size} height={size} />

  return (
    <Container>
      <Background isGrayBg={!grayIsOnRight}>
        {!grayIsOnRight ? Illust : Message}
      </Background>
      <Background isGrayBg={grayIsOnRight}>
        {grayIsOnRight ? Illust : Message}
      </Background>
    </Container>
  )
}

export default IllustCard
