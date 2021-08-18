import { Typography } from '@material-ui/core'
import React from 'react'
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

const Root = styled.div`
  ${tw`h-48 flex`}
`

const Background = styled.div<{ isGrayBg?: boolean }>`
  ${tw`w-1/2 h-48 flex justify-center items-center`}
  background: ${({ theme, isGrayBg }) =>
    isGrayBg ? theme.palette.secondary.main : ''};
`

const IllustCard: React.FC<Props> = ({
  grayIsOnRight,
  imageUri,
  text,
  size = 170,
}) => {
  const Message = <Typography>{replaceWithBrTag(text)}</Typography>
  const Illust = <Image src={imageUri} width={size} height={size} />

  return (
    <Root>
      <Background isGrayBg={!grayIsOnRight}>
        {!grayIsOnRight ? Illust : Message}
      </Background>
      <Background isGrayBg={grayIsOnRight}>
        {grayIsOnRight ? Illust : Message}
      </Background>
    </Root>
  )
}

export default IllustCard
