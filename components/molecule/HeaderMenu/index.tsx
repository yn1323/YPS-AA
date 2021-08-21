import ButtonMenu from '@atom/ButtonMenu'
import { Alarm, Home, Send, ShoppingCart } from '@material-ui/icons'
import React, { FC, useMemo, useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

interface Props {
  showTimeCard?: boolean
  isAdmin?: boolean
}

type Menu = {
  icon: JSX.Element
  label: string
  showArrowDown: boolean
  clickHandler: () => void
}

const ButtonWrapper = styled.div`
  > * {
    ${tw`mx-2`}
  }
`

export const handler1 = () => console.log('OK')
const COMMON_MENU = [
  {
    icon: <Home />,
    label: 'マイページ',
    showArrowDown: true,
    clickHandler: handler1,
  },
  {
    icon: <Send />,
    label: '申請',
    showArrowDown: true,
    clickHandler: () => console.log('OK'),
  },
]

const TIMECARD = [
  {
    icon: <Alarm />,
    label: 'タイムカード',
    showArrowDown: false,
    clickHandler: () => console.log('OK'),
  },
]

const ADMIN_MENU = [
  {
    icon: <ShoppingCart />,
    label: '店舗管理',
    showArrowDown: true,
    clickHandler: () => console.log('OK22'),
  },
]

const HeaderMenu: FC<Props> = ({ showTimeCard = false, isAdmin = false }) => {
  //
  //

  const MENU = useMemo<Menu[]>(
    () => [
      ...COMMON_MENU,
      ...(showTimeCard ? TIMECARD : []),
      ...(isAdmin ? ADMIN_MENU : []),
    ],
    [showTimeCard, isAdmin]
  )

  return (
    <ButtonWrapper>
      {MENU.map(({ icon, label, showArrowDown, clickHandler }, i) => (
        <ButtonMenu
          icon={icon}
          clickHandler={clickHandler}
          showArrowDown={showArrowDown}
          key={i}
        >
          {label}
        </ButtonMenu>
      ))}
    </ButtonWrapper>
  )
}

export default HeaderMenu
