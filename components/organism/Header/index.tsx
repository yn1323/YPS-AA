import React, { FC } from 'react'
import { AppBar, Button, Toolbar, ToolbarProps } from '@material-ui/core'
import HeaderTitle from '@atom/HeaderTitle'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import HeaderMenu from '@molecule/HeaderMenu'

interface Props {
  isLoggedIn?: boolean
}
const SpacedToolbar = styled(Toolbar)<{ $isLoggedIn: boolean }>`
  ${({ $isLoggedIn }) => $isLoggedIn && tw`px-4 lg:px-56`}
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`

const Header: FC<Props> = ({ isLoggedIn = false }) => {
  return (
    <AppBar position="fixed">
      <SpacedToolbar $isLoggedIn={isLoggedIn}>
        <HeaderTitle>YPS</HeaderTitle>
        {isLoggedIn && <HeaderMenu isAdmin showTimeCard />}

        {!isLoggedIn && (
          <Button variant="contained" color="primary">
            ログイン
          </Button>
        )}
      </SpacedToolbar>
    </AppBar>
  )
}

export default Header
