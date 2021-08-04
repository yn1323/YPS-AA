import React from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import HeaderTitle from '@atom/HeaderTitle'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

const SpacedToolbar = styled(Toolbar)`
  ${tw`px-4 lg:px-56`}
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`

const Header: React.FC = () => {
  return (
    <AppBar position="fixed">
      <SpacedToolbar>
        <HeaderTitle>タイトル</HeaderTitle>
        <Button color="inherit">Login</Button>
      </SpacedToolbar>
    </AppBar>
  )
}

export default Header
