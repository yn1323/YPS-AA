import { Avatar, Button } from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'
import styled from 'styled-components'
import React, { FC, useRef, useState } from 'react'
import tw from 'tailwind-extended.macro'
import ListMenu from '@atom/ListMenu'
import { USER_MENU } from '@constant/layout/menus'
import Popper from '@atom/Popper'

interface Props {
  isSp: boolean
}

export const TextButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.secondary};
`
const StyledAvatar = styled(Avatar)`
  width: 36px;
  height: 36px;
`

const ButtonAvatarMenu: FC<Props> = ({ isSp = false }) => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  const clickHandler = () => {
    isSp
      ? () => {
          alert('show drawer!')
        }
      : setShow(true)
  }

  return (
    <>
      <TextButton
        endIcon={!isSp ? <KeyboardArrowDown /> : undefined}
        ref={ref}
        onClick={clickHandler}
      >
        <StyledAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </TextButton>
      {!isSp && (
        <Popper
          show={show}
          setShow={setShow}
          anchorEl={ref.current}
          placement="bottom-end"
        >
          <ListMenu items={USER_MENU} delimeterPosition={[1]} />
        </Popper>
      )}
    </>
  )
}

export default ButtonAvatarMenu
