import React, { FC } from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import HeaderTitle from '@atom/HeaderTitle'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

interface Props {
  isLogin?: boolean
}

const SpacedToolbar = styled(Toolbar)`
  ${tw`px-4 lg:px-56`}
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`

const Header: FC = () => {
  return (
    <AppBar position="fixed">
      <SpacedToolbar>
        <HeaderTitle>YPS</HeaderTitle>
        <Button variant="contained" color="primary">
          ログイン
        </Button>
      </SpacedToolbar>
    </AppBar>
  )
}

export default Header
