import { Typography, TypographyProps } from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

type Types = 'sub' | 'description'
const HeaderTypes = { sub: 'h2', description: 'subtitle1' } as const

interface Props {
  children: string | JSX.Element
  type: Types
  underline?: boolean
}

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
    ${tw`h-0.5`}
    background-image: linear-gradient(to right, #da8d00d5, #ffa6006a, #ffa60016);
  `,
  description: styled.div``,
}

const Heading: FC<Props> = ({ children, type, underline }) => {
  const variant = HeaderTypes[type]
  const HeaderElem = styles[type]
  const Underline = underlines[type]
  return (
    <>
      <HeaderElem variant={variant}>{children}</HeaderElem>
      {underline && <Underline />}
    </>
  )
}

export default Heading
