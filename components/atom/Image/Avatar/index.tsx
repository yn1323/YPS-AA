import { Avatar as AvatarComponent } from '@material-ui/core'
import React, { FC } from 'react'

type Size = 'lg' | 'md' | 'sm'
const SizePx = {
  lg: 48,
  md: 36,
  sm: 24,
}

interface Props {
  url: string
  alt?: string
  size?: Size
}

const Avatar: FC<Props> = ({ url, alt = '', size = 'md' }) => {
  return (
    <AvatarComponent
      alt={alt}
      src={url}
      style={{ width: SizePx[size], height: SizePx[size] }}
    />
  )
}

export default Avatar
