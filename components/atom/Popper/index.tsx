import { Fade } from '@material-ui/core'
import {
  ClickAwayListener,
  MenuList,
  Paper,
  Popper as PopperComponent,
} from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'

type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
interface Props {
  show: boolean
  setShow: (show: boolean) => void
  anchorEl: null | HTMLElement
  placement?: Placement
  children: JSX.Element
  timeout?: number
}

const Container = styled(PopperComponent)`
  z-index: 10000;
  min-width: 180px;
`

const Popper: FC<Props> = ({
  placement = 'bottom-start',
  show,
  setShow,
  anchorEl,
  children,
  timeout = 0,
}) => {
  const close = () => {
    setShow(false)
  }

  return (
    <Container open={show} placement={placement} transition anchorEl={anchorEl}>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={timeout}>
          <Paper>
            <ClickAwayListener onClickAway={close}>
              <MenuList>{children}</MenuList>
            </ClickAwayListener>
          </Paper>
        </Fade>
      )}
    </Container>
  )
}

export default Popper
