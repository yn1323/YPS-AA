import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import { MenuItem as MenuItemType } from '@constant/layout/menus'

interface Props {
  items: MenuItemType[]
  delimeterPosition?: number[]
}

const MenuIcon = styled(ListItemIcon)`
  color: ${({ theme }) => theme.palette.text.secondary};
  min-width: 2rem;
`
const MenuText = styled(ListItemText)`
  ${tw`m-0`}
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 14px;
`
const MenuDivider = styled(Divider)`
  ${tw`mx-2`}
`

const ListMenu: FC<Props> = ({ items, delimeterPosition = [] }) => {
  const MenuItems = items.reduce(
    (acc: JSX.Element[], { icon, label, link }, i) => {
      acc.push(
        <MenuItem onClick={close} key={acc.length + 1}>
          <MenuIcon>{icon}</MenuIcon>
          <MenuText primary={label} disableTypography />
          {delimeterPosition.includes(i) && <MenuDivider />}
        </MenuItem>
      )
      if (delimeterPosition.includes(i)) {
        acc.push(<MenuDivider key={acc.length + 1} />)
      }
      return acc
    },
    []
  )

  return <>{MenuItems}</>
}

export default ListMenu
