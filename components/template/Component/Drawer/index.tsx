import { SwipeableDrawer } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import { mediaQueries } from '@constant/mixins'

interface Props {
  children: JSX.Element
  open: boolean
  setOpen: (open: any) => void
}

const Container = styled.div`
  ${tw`py-4`}
  min-width: 150px;
  ${mediaQueries('md')} {
    min-width: 180px;
  }
`

const Drawer: React.FC<Props> = ({ children, open, setOpen }) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <Container>{children}</Container>
    </SwipeableDrawer>
  )
}

export default Drawer
