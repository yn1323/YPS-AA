import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const TitleText = styled(Typography)`
  flex-grow: 1;
`

const HeaderTitle: React.FC = ({ children }) => {
  return <TitleText variant="h6">{children}</TitleText>
}

export default HeaderTitle
