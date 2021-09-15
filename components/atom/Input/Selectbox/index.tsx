import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@material-ui/core'
import React, { FC, useState } from 'react'

export type Option = {
  label: string
  value: string
}

export interface Props {
  inputLabel?: string
  helperText?: string
  initialValue: string
  options: Option[]
  variant?: SelectProps['variant']
  setter: (v: string) => void
}

const Selectbox: FC<Props> = ({
  inputLabel = '',
  helperText = '',
  initialValue,
  setter,
  options,
  variant = 'standard',
}) => {
  const [val, setVal] = useState(initialValue)

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setVal(event.target.value as string)
    setter(event.target.value as string)
  }

  return (
    <FormControl style={{ width: '100%' }}>
      {inputLabel && <InputLabel>{inputLabel}</InputLabel>}

      <Select
        value={val}
        onChange={handleChange}
        displayEmpty
        variant={variant}
      >
        {options.map(({ label, value }, i) => (
          <MenuItem value={value} key={i}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default Selectbox
