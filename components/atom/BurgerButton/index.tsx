import { IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

const BurgerMenuButton = styled(IconButton)`
  ${tw`mr-4`}
`

const BurgerButton: React.FC = () => {
  return (
    <BurgerMenuButton edge="start" color="inherit" aria-label="menu">
      <Menu />
    </BurgerMenuButton>
  )
}

export default BurgerButton
