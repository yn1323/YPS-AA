import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import SlashLink from '@atom/Text/SlashLink'
import { FOOTER_LINKS } from '@constant/common'

const Container = styled.div`
  ${tw`h-14 p-1 flex w-full flex-col justify-center`}
  background: ${({ theme }) => theme.palette.secondary.light};
`

const Urls = styled.div`
  ${tw`flex justify-center items-center h-3/5 w-full`}
`
const CopyRight = styled(Typography)`
  ${tw`flex justify-center h-2/5 items-center w-full`}
`

const Footer: FC = () => {
  return (
    <Container>
      <Urls>
        <SlashLink links={FOOTER_LINKS} />
      </Urls>
      <CopyRight variant="caption">©2021 YPS Team.</CopyRight>
    </Container>
  )
}

export default Footer
