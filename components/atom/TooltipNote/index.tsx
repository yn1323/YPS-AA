import { IconButton, Tooltip } from '@material-ui/core'
import { HelpOutlineOutlined } from '@material-ui/icons'
import React, { FC } from 'react'

interface Props {
  children: string
}

const TooptipNote: FC<Props> = ({ children }) => {
  return (
    <Tooltip title={children}>
      <IconButton size="small">
        <HelpOutlineOutlined />
      </IconButton>
    </Tooltip>
  )
}

export default TooptipNote
