import { Typography, TypographyProps } from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

type Types = 'sub' | 'description'
const HeaderTypes = { sub: 'h2', description: 'subtitle1' } as const

interface Props {
  children: string
  type: Types
  showUnderline?: boolean
}

const styles = {
  sub: styled(Typography)`
    font-size: 2rem;
    color: ${({ theme }) => theme.palette.text.primary};
  `,
  description: styled(Typography)`
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.text.primary};
  `,
}

const underlines = {
  sub: styled.div`
    ${tw`h-0.5`}
    background-image: linear-gradient(to right, #ac5d79, #6d546c, #444444);
  `,
  description: styled.div``,
}

const Heading: FC<Props> = ({ children, type, showUnderline }) => {
  const variant = HeaderTypes[type]
  const HeaderElem = styles[type]
  const Underline = underlines[type]
  return (
    <>
      <HeaderElem variant={variant}>{children}</HeaderElem>
      {showUnderline && <Underline />}
    </>
  )
}

export default Heading
