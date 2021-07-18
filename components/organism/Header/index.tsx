import React from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import BurgerButton from '@atom/BurgerButton'
import HeaderTitle from '@atom/HeaderTitle'

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <BurgerButton />
        <HeaderTitle>タイトル</HeaderTitle>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
