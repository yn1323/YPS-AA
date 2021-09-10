import React, { FC } from 'react'
import styled from 'styled-components'
import IllustCard from '@atom/IllustCard'

const illusts = [
  {
    imageUri: '/images/storyset/schedule.svg',
    text: 'シフトを一覧で表示',
    size: 220,
    isIllustRight: true,
  },
  {
    imageUri: '/images/storyset/cheff.svg',
    text: '美味しいごはん',
    size: 170,
    isIllustRight: false,
  },
  {
    imageUri: '/images/storyset/mobile.svg',
    text: 'スマホで登録',
    size: 170,
    isIllustRight: true,
  },
] as const

const Container = styled.div`
  outline: ${({ theme }) => `1px solid ${theme.palette.secondary.main}`};
`

const IllustCards: FC = () => {
  const illustCardArray = illusts.map(
    ({ imageUri, text, size, isIllustRight }, i) => (
      <IllustCard
        key={i}
        imageUri={imageUri}
        text={text}
        size={size}
        grayIsOnRight={isIllustRight}
      />
    )
  )
  return <Container>{illustCardArray}</Container>
}

export default IllustCards
