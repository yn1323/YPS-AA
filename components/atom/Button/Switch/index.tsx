import {
  FormControlLabel,
  Switch as MaterialUiSwitch,
  SwitchProps,
} from '@material-ui/core'
import React, { FC } from 'react'

export interface Props {
  color: SwitchProps['color']
  disabled?: boolean
  initialChecked: boolean
  size?: SwitchProps['size']
  setter: (v: boolean) => void
  name?: string
  children?: string
}

const Switch: FC<Props> = ({
  color = 'primary',
  disabled = false,
  initialChecked,
  size = 'medium',
  setter,
  name = '',
  children,
}) => {
  const [isChecked, setChecked] = React.useState(initialChecked)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked((event.target as HTMLInputElement).checked)
    setter((event.target as HTMLInputElement).checked)
  }

  return (
    <FormControlLabel
      control={
        <MaterialUiSwitch
          checked={isChecked}
          color={color}
          size={size}
          disabled={disabled}
          onChange={handleChange}
          name={name}
        />
      }
      label={children}
    />
  )
}

export default Switch
