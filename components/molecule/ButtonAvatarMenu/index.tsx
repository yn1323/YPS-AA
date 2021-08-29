import { Avatar, Button } from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'
import styled from 'styled-components'
import React, { FC, useRef, useState } from 'react'
import tw from 'tailwind-extended.macro'
import ListMenu from '@atom/ListMenu'
import { USER_MENU } from '@constant/layout/menus'

interface Props {}

export const TextButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.secondary};
`
const StyledAvatar = styled(Avatar)`
  width: 36px;
  height: 36px;
`

const ButtonAvatarMenu: FC<Props> = () => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  return (
    <>
      <TextButton
        endIcon={<KeyboardArrowDown />}
        ref={ref}
        onClick={() => setShow(true)}
      >
        <StyledAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </TextButton>
      <ListMenu
        items={USER_MENU}
        delimeterPosition={[1]}
        show={show}
        setShow={setShow}
        anchorEl={ref.current}
        placement="bottom-end"
      />
    </>
  )
}

export default ButtonAvatarMenu
