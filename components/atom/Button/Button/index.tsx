import { Button as MaterialUiButton, ButtonProps } from '@material-ui/core'
import React, { FC } from 'react'

export interface Props {
  color?: ButtonProps['color']
  variant?: ButtonProps['variant']
  disabled?: boolean
  size?: ButtonProps['size']
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  onClick: () => void
  children: string
}

const Button: FC<Props> = ({
  color = 'primary',
  variant = 'contained',
  disabled = false,
  size = 'medium',
  startIcon,
  endIcon,
  onClick,
  children,
}) => {
  return (
    <MaterialUiButton
      color={color}
      variant={variant}
      disabled={disabled}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {children}
    </MaterialUiButton>
  )
}

export default Button
