import React, { FC } from 'react'

import IllustCardSmall from '@atom/IllustCardSmall'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

const illusts = [
  {
    isGray: false,
    imageUri: '/images/functionalIcon1.png',
    text: '開閉店時間',
  },
  {
    isGray: true,
    imageUri: '/images/functionalIcon2.png',
    text: 'タイムカード',
  },
  {
    isGray: false,
    imageUri: '/images/functionalIcon3.png',
    text: '月ごとで管理',
  },
  {
    isGray: true,
    imageUri: '/images/functionalIcon4.png',
    text: '勤務時間のリスト化',
  },
  {
    isGray: false,
    imageUri: '/images/functionalIcon5.png',
    text: '無料',
  },
  {
    isGray: true,
    imageUri: '/images/functionalIcon6.png',
    text: 'クラウドに保存',
  },
] as const

const Container = styled.div`
  ${tw`flex flex-wrap`}
  outline: ${({ theme }) => `1px solid ${theme.palette.secondary.main}`};
`

const IllustCardsSmall: FC = () => {
  const illustCardArray = illusts.map(({ isGray, imageUri, text }, i) => (
    <IllustCardSmall key={i} isGray={isGray} imageUri={imageUri} text={text} />
  ))
  return <Container>{illustCardArray}</Container>
}

export default IllustCardsSmall
