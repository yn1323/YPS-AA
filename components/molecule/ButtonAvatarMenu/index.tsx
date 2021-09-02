import { Avatar, Button, Hidden } from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'
import styled from 'styled-components'
import React, { FC, useRef, useState } from 'react'
import tw from 'tailwind-extended.macro'
import ListMenu from '@atom/ListMenu'
import { USER_MENU } from '@constant/layout/menus'
import Popper from '@atom/Popper'
import { useMediaQuery } from '@hooks/useMediaQuery'

export const TextButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.secondary};
`
const StyledAvatar = styled(Avatar)`
  width: 36px;
  height: 36px;
`
const SpSpace = styled.div`
  flex-grow: 1;
`

const ButtonAvatarMenu: FC = () => {
  const [show, setShow] = useState(false)
  const upMd = useMediaQuery('md')
  const ref = useRef(null)
  const clickHandler = () => setShow(true)

  return (
    <>
      <SpSpace />
      <TextButton
        endIcon={upMd ? <KeyboardArrowDown /> : undefined}
        ref={ref}
        onClick={clickHandler}
      >
        <StyledAvatar alt="Somebody" src="/static/images/avatar/1.jpg" />
      </TextButton>
      <Popper
        show={show}
        setShow={setShow}
        anchorEl={ref.current}
        placement="bottom-end"
      >
        <ListMenu items={USER_MENU} delimeterPosition={[1]} />
      </Popper>
    </>
  )
}

export default ButtonAvatarMenu
