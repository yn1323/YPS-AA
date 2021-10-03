import { Button } from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'
import React, { FC, useRef, useState } from 'react'
import styled from 'styled-components'
import Avatar from '@atom/Image/Avatar'
import ListMenu from '@atom/ListMenu'
import Popper from '@atom/Popper'
import { USER_MENU } from '@constant/layout/menus'
import { useMediaQuery } from '@hooks/useMediaQuery'

export const TextButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.secondary};
`
const SpSpace = styled.div`
  flex-grow: 1;
`

const AvatarMenu: FC = () => {
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
        <Avatar alt="Somebody" url="/static/images/avatar/1.jpg" />
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

export default AvatarMenu
