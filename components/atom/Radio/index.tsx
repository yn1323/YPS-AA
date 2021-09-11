import {
  FormControlLabel,
  RadioGroup,
  Radio as MaterialUIRadio,
  RadioProps,
} from '@material-ui/core'
import React, { FC, useEffect } from 'react'

type Option = {
  label: string
  value: string
  disabled?: boolean
  color?: RadioProps['color']
}

export interface Props {
  initialVal: string
  groupName: string
  options: Option[]
  setter: (v: string) => void
  row?: boolean
}

const Radio: FC<Props> = ({
  initialVal,
  groupName,
  options,
  setter,
  row = false,
}) => {
  const [value, setValue] = React.useState(initialVal)

  useEffect(() => {
    setter(value)
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <RadioGroup
      name={groupName}
      arial-label={groupName}
      value={value}
      onChange={handleChange}
      row={row}
    >
      {options.map(
        ({ label, value, disabled = false, color = 'primary' }, i) => (
          <FormControlLabel
            value={value}
            control={<MaterialUIRadio color={color} />}
            label={label}
            disabled={disabled}
            key={i}
          />
        )
      )}
    </RadioGroup>
  )
}

export default Radio
