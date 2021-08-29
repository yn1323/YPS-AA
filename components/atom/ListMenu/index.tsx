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

interface Props {
  items: MenuItemType[]
  delimeterPosition?: number[]
  show: boolean
  setShow: (show: boolean) => void
  anchorEl: null | HTMLElement
}

const Exnteder = styled.div`
  color: ${({ theme }) => theme.palette.text.secondary};
`
const Container = styled(Popper)`
  z-index: 10000;
`
const MenuIcon = Exnteder.withComponent(ListItemIcon)
const MenuText = Exnteder.withComponent(ListItemText)

const ListMenu: FC<Props> = ({
  items,
  delimeterPosition = [],
  show,
  setShow,
  anchorEl,
}) => {
  const close = () => setShow(false)

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
              <MenuList>
                {items.map(({ icon, label, link }, i) => (
                  <MenuItem onClick={close} key={i}>
                    <MenuIcon>{icon}</MenuIcon>
                    <MenuText primary={label} />
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Fade>
      )}
    </Container>
  )
}

export default ListMenu
