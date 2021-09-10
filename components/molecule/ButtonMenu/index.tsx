import { Button } from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'
import React, { FC, useRef, useState } from 'react'
import styled from 'styled-components'
import ListMenu from '@atom/ListMenu'
import Popper from '@atom/Popper'
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
  const ref = useRef(null)

  return (
    <>
      <TextButton
        startIcon={icon}
        endIcon={hasMenu ? <KeyboardArrowDown /> : undefined}
        href={link ? link : undefined}
        onClick={!link ? () => setShow(true) : undefined}
        ref={ref}
      >
        {children}
      </TextButton>
      {!!items.length && (
        <Popper show={show} setShow={setShow} anchorEl={ref.current}>
          <ListMenu items={items} delimeterPosition={delimeterPosition} />
        </Popper>
      )}
    </>
  )
}

export default ButtonMenu
