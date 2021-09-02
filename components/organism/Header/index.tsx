import React, { FC } from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import HeaderTitle from '@atom/HeaderTitle'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import HeaderMenu from '@organism/HeaderMenu'
import ButtonAvatarMenu from '@molecule/ButtonAvatarMenu'

interface Props {
  isLoggedIn?: boolean
}
const Container = styled(AppBar)`
  box-shadow: none;
`
const SpacedToolbar = styled(Toolbar)<{ $isLoggedIn: boolean }>`
  ${({ $isLoggedIn }) => $isLoggedIn && tw`px-4`}
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`

const Header: FC<Props> = ({ isLoggedIn = false }) => {
  return (
    <Container position="fixed">
      <SpacedToolbar $isLoggedIn={isLoggedIn} variant="dense">
        <HeaderTitle isLoggedIn={isLoggedIn}>YPS</HeaderTitle>
        {isLoggedIn && <HeaderMenu isAdmin showTimeCard />}

        {isLoggedIn ? (
          <ButtonAvatarMenu />
        ) : (
          <Button variant="contained" color="primary" size="small">
            ログイン
          </Button>
        )}
      </SpacedToolbar>
    </Container>
  )
}

export default Header
