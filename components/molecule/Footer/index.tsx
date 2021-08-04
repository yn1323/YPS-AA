import React from 'react'
import { Typography } from '@material-ui/core'
import SlashLink from '@atom/SlashLink'
import { FOOTER_LINKS } from '@constant'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

const Root = styled.div`
  ${tw`h-14 p-1 flex w-full flex-col justify-center`}
  background: ${({ theme }) => theme.palette.secondary.light};
`

const Urls = styled.div`
  ${tw`flex justify-center items-center h-3/5 w-full`}
`
const CopyRight = styled(Typography)`
  ${tw`flex justify-center h-2/5 items-center w-full`}
`

const Footer: React.FC = () => {
  return (
    <Root>
      <Urls>
        <SlashLink links={FOOTER_LINKS} />
      </Urls>
      <CopyRight variant="caption">©2021 YPS Team.</CopyRight>
    </Root>
  )
}

export default Footer
