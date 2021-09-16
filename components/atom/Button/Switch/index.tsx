import {
  FormControlLabel,
  Switch as MaterialUiSwitch,
  SwitchProps,
} from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'

const Label = styled.div`
  font-size: 0.9rem;
`

export interface Props {
  color?: SwitchProps['color']
  disabled?: boolean
  initialChecked: boolean
  size?: SwitchProps['size']
  labelOnFalse?: string
  setter: (v: boolean) => void
  name?: string
  children?: string
}

const Switch: FC<Props> = ({
  color = 'primary',
  disabled = false,
  initialChecked,
  size = 'medium',
  labelOnFalse = '',
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
      style={{ fontSize: '0,9rem' }}
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
      label={<Label>{isChecked ? children : labelOnFalse || children}</Label>}
    />
  )
}

export default Switch
