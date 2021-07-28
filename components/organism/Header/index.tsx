import React from 'react'
import { AppBar, Button, Theme, Toolbar } from '@material-ui/core'
import HeaderTitle from '@atom/HeaderTitle'
import styled from 'styled-components'

interface Props {
  space?: number
}

const SpacedToolbar = styled(Toolbar)<Pick<Props, 'space'>>`
  padding-left: ${({ space }) => space}px;
  padding-right: ${({ space }) => space}px;
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`

const Header: React.FC<Props> = ({ space = 20 }) => {
  return (
    <AppBar position="fixed">
      <SpacedToolbar space={space}>
        <HeaderTitle>タイトル</HeaderTitle>
        <Button color="inherit">Login</Button>
      </SpacedToolbar>
    </AppBar>
  )
}

export default Header
