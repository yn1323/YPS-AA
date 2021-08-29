import ButtonMenu from '@molecule/ButtonMenu'
import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import {
  ADMIN_MENU,
  COMMON_MENU,
  HeaderMenu as HeaderMenuType,
  TIMECARD,
} from '@constant/layout/menus'

interface Props {
  showTimeCard?: boolean
  isAdmin?: boolean
}

const ButtonWrapper = styled.div`
  > * {
    ${tw`mx-2`}
  }
`

const HeaderMenu: FC<Props> = ({ showTimeCard = false, isAdmin = false }) => {
  const MENU = useMemo<HeaderMenuType[]>(
    () => [
      ...COMMON_MENU,
      ...(showTimeCard ? TIMECARD : []),
      ...(isAdmin ? ADMIN_MENU : []),
    ],
    [showTimeCard, isAdmin]
  )

  return (
    <ButtonWrapper>
      {MENU.map(
        ({ icon, label, hasMenu, link, delimeterPosition, items }, i) => (
          <ButtonMenu
            icon={icon}
            hasMenu={hasMenu}
            link={link}
            delimeterPosition={delimeterPosition}
            items={items}
            key={i}
          >
            {label}
          </ButtonMenu>
        )
      )}
    </ButtonWrapper>
  )
}

export default HeaderMenu
