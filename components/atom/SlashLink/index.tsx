import { injectStringInArray } from '@helper'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

interface Props {
  links: {
    text: string
    url: string
    rel: string
  }[]
}

const Root = styled.div`
  > * {
    ${tw`mx-1`}
    color: ${({ theme }) => theme.palette.text.primary};
  }
`

const SlashLink: React.FC<Props> = ({ links }) => {
  const linkWithDelimeter = injectStringInArray(links, '/').map((v, i) => {
    if (v === '/') {
      return <span key={i}>{v}</span>
    } else {
      return (
        <a key={i} href={v.url} rel={v.rel}>
          {v.text}
        </a>
      )
    }
  })
  return <Root>{linkWithDelimeter}</Root>
}

export default SlashLink
