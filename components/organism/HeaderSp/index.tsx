import React, { FC, useMemo } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import ButtonAvatarMenu from '@molecule/ButtonAvatarMenu'
import { useRouter } from 'next/router'
import { MENU } from '@constant/layout/menus'

const Container = styled(AppBar)`
  box-shadow: none;
`
const SpacedToolbar = styled(Toolbar)<{ $isLoggedIn: boolean }>`
  ${tw`pl-4 pr-0`}
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`
const PageName = styled.div`
  flex-grow: 1;
`

const HeaderSp: FC = () => {
  const path = useRouter()?.asPath
  const pageName = useMemo(() => {
    const menu = Object.values(MENU).find(({ link }) => link === path)
    return menu?.label ?? 'Not Found'
  }, [path])

  return (
    <Container position="fixed">
      <SpacedToolbar $isLoggedIn={false} variant="dense">
        <PageName>{pageName}</PageName>

        <ButtonAvatarMenu isSp />
      </SpacedToolbar>
    </Container>
  )
}

export default HeaderSp
