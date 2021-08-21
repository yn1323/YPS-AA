import { Button } from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'
import React, { FC } from 'react'

interface Props {
  icon: JSX.Element
  showArrowDown?: boolean
  clickHandler: () => void
}

const ButtonMenu: FC<Props> = ({
  icon,
  showArrowDown = true,
  clickHandler,
  children,
}) => {
  return (
    <Button
      color="inherit"
      startIcon={icon}
      endIcon={showArrowDown ? <KeyboardArrowDown /> : undefined}
      onClick={clickHandler}
    >
      {children}
    </Button>
  )
}

export default ButtonMenu
