import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

const HeaderTypes = { sub: 'h2' } as const

interface Props {
  children: string
  type: keyof typeof HeaderTypes
  showUnderline?: boolean
}

const styles = {
  sub: styled(Typography)`
    font-size: 2rem;
    color: ${({ theme }) => theme.palette.text.primary};
  `,
}

const underlines = {
  sub: styled.div`
    ${tw`h-0.5`}
    background-image: linear-gradient(to right, #ac5d79, #6d546c, #444444);
  `,
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
