import ListMenu from '@atom/ListMenu'
import { Button } from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'
import styled from 'styled-components'
import React, { FC, MouseEvent, useState } from 'react'
import { MenuItem } from '@constant/layout/menus'

interface Props {
  icon: JSX.Element
  items?: MenuItem[]
  delimeterPosition?: number[]
  hasMenu: boolean
  link: string
}

export const TextButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.secondary};
`

const ButtonMenu: FC<Props> = ({
  icon,
  items = [],
  delimeterPosition,
  hasMenu,
  link,
  children,
}) => {
  const [show, setShow] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const showMenuHandler = (e: MouseEvent<HTMLElement>) => {
    setShow(true)
    setAnchorEl(e.currentTarget)
  }

  return (
    <>
      <TextButton
        startIcon={icon}
        endIcon={hasMenu ? <KeyboardArrowDown /> : undefined}
        href={link ? link : undefined}
        onClick={!link ? showMenuHandler : undefined}
      >
        {children}
      </TextButton>
      {!!items.length && (
        <ListMenu
          items={items}
          delimeterPosition={delimeterPosition}
          show={show}
          setShow={setShow}
          anchorEl={anchorEl}
        />
      )}
    </>
  )
}

export default ButtonMenu
