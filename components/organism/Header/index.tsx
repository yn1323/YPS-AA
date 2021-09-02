import React, { cloneElement, FC, Fragment, useMemo } from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import HeaderTitle from '@atom/HeaderTitle'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import HeaderMenu from '@organism/HeaderMenu'
import ButtonAvatarMenu from '@molecule/ButtonAvatarMenu'

interface Props {
  isLoggedIn?: boolean
  isInitialLogin?: boolean
}
const Container = styled(AppBar)`
  box-shadow: none;
`
const SpacedToolbar = styled(Toolbar)<{ $isLoggedIn: boolean }>`
  ${({ $isLoggedIn }) => $isLoggedIn && tw`px-4`}
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`

const Header: FC<Props> = ({ isLoggedIn = false, isInitialLogin = false }) => {
  const headerItems = useMemo(
    () => [
      isLoggedIn && <HeaderMenu isAdmin showTimeCard />,
      isLoggedIn && !isInitialLogin && <ButtonAvatarMenu />,
      !isLoggedIn && !isInitialLogin && (
        <Button variant="contained" color="primary" size="small">
          ログイン
        </Button>
      ),
    ],
    [isLoggedIn, isInitialLogin]
  )

  return (
    <Container position="fixed">
      <SpacedToolbar $isLoggedIn={isLoggedIn} variant="dense">
        <HeaderTitle isLoggedIn={isLoggedIn}>YPS</HeaderTitle>
        {headerItems.map((item, i) => (
          <Fragment key={i}>{item}</Fragment>
        ))}
      </SpacedToolbar>
    </Container>
  )
}

export default Header
