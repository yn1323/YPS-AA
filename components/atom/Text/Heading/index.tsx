import { Typography } from '@material-ui/core'
import { Link } from '@material-ui/icons'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

type Types = 'sub' | 'description'
const HeaderTypes = { sub: 'h2', description: 'subtitle1' } as const

interface Props {
  children: string | JSX.Element
  type: Types
  icon?: JSX.Element
  link?: string
  underline?: boolean
}

const Container = styled.div`
  ${tw`flex items-center`}
`
const Header = styled.div`
  ${tw`inline-block`}
`
const HeaderWrapper = styled.div`
  ${tw`pl-1 pr-12 flex items-center`}
`
const LinkIcon = styled(Link)`
  ${tw`ml-4`}
  color: ${({ theme }) => theme.palette.text.secondary};
`

const styles = {
  sub: styled(Typography)`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.palette.text.primary};
  `,
  description: styled(Typography)`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.palette.text.primary};
  `,
}

const underlines = {
  sub: styled.div`
    ${tw`h-0.5 w-full`}
    background-image: linear-gradient(to right, #da8d00d5, #ffa6006a, #ffa60018);
  `,
  description: styled.div``,
}

const Heading: FC<Props> = ({ children, type, underline, icon, link }) => {
  const variant = HeaderTypes[type]
  const HeaderElem = styles[type]
  const Underline = underlines[type]

  return (
    <Container onClick={() => console.log(link)}>
      {icon}
      <Header>
        <HeaderWrapper>
          <HeaderElem variant={variant}>{children}</HeaderElem>
          {!!link && <LinkIcon />}
        </HeaderWrapper>
        <div>{underline && <Underline />}</div>
      </Header>
    </Container>
  )
}

export default Heading
