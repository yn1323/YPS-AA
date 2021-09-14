import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

interface Props {
  links: {
    text: string
    url: string
    rel: string
  }[]
}

const Container = styled.div`
  > * {
    ${tw`mx-1`}
    color: ${({ theme }) => theme.palette.text.primary};
  }
`

const UrlLink = styled.a`
  ${tw`relative mx-4`}
  &:not(:first-child):before {
    content: '/';
    ${tw`absolute -left-4`};
  }
`

const SlashLink: FC<Props> = ({ links }) => {
  return (
    <Container>
      {links.map(({ url, rel, text }, i) => (
        <UrlLink href={url} rel={rel} key={i}>
          {text}
        </UrlLink>
      ))}
    </Container>
  )
}

export default SlashLink
