import { IconButton, Tooltip } from '@material-ui/core'
import { HelpOutlineOutlined } from '@material-ui/icons'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
interface Props {
  children: string
}

const StyledIconButton = styled(IconButton)`
  background: 'transparent';
  ${tw`p-1`}
  svg {
    height: 1rem;
    width: 1rem;
  }
`

const Note: FC<Props> = ({ children }) => {
  return (
    <Tooltip title={children}>
      <StyledIconButton
        disableRipple
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <HelpOutlineOutlined />
      </StyledIconButton>
    </Tooltip>
  )
}

export default Note
