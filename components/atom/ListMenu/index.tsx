import { MenuItem as MenuItemType } from '@constant/layout/menus'
import { Divider, Fade } from '@material-ui/core'
import {
  ClickAwayListener,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

interface Props {
  items: MenuItemType[]
  delimeterPosition?: number[]
  show: boolean
  setShow: (show: boolean) => void
  anchorEl: null | HTMLElement
}

const Container = styled(Popper)`
  z-index: 10000;
`

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

const ListMenu: FC<Props> = ({
  items,
  delimeterPosition = [],
  show,
  setShow,
  anchorEl,
}) => {
  const close = () => setShow(false)

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

  return (
    <Container
      open={show}
      placement="bottom-start"
      transition
      anchorEl={anchorEl}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={200}>
          <Paper>
            <ClickAwayListener onClickAway={close}>
              <MenuList>{MenuItems}</MenuList>
            </ClickAwayListener>
          </Paper>
        </Fade>
      )}
    </Container>
  )
}

export default ListMenu
