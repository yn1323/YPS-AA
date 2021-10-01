import { Typography } from '@material-ui/core'
import { HelpOutline } from '@material-ui/icons'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import Avatar from '@atom/Image/Avatar'
import Heading from '@atom/Text/Heading'
import { theme } from '@constant/theme'

interface Props {
  children: JSX.Element[]
}

const BodyWrapper = styled.div`
  ${tw`my-2 ml-6`}
`

const SummaryBase: FC<Props> = ({ children }) => {
  if (children.length !== 2) {
    return <></>
  }
  return (
    <>
      {children[0]}
      <BodyWrapper>{children[1]}</BodyWrapper>
    </>
  )
}

export default SummaryBase
