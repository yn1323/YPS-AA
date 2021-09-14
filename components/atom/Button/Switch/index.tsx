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
  label: string
  setter: (v: boolean) => void
  name?: string
}

const Switch: FC<Props> = ({
  color = 'primary',
  disabled = false,
  initialChecked,
  size = 'medium',
  label,
  setter,
  name = '',
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
      label={label}
    />
  )
}

export default Switch
