import {
  FormControlLabel,
  RadioGroup,
  Radio as MaterialUIRadio,
  RadioProps,
} from '@material-ui/core'
import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import TooltipNote from '@atom/Button/Note'

export type Option = {
  label: string
  value: string
  disabled?: boolean
  color?: RadioProps['color']
  note?: string
}

export interface Props {
  initialValue: string
  groupName: string
  options: Option[]
  setter: (v: string) => void
  row?: boolean
}

const LabelContainer = styled.div`
  ${tw`flex `}
`

const Radio: FC<Props> = ({
  initialValue,
  groupName,
  options,
  setter,
  row = false,
}) => {
  const [value, setValue] = React.useState(initialValue)

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
        (
          { label, value, disabled = false, color = 'primary', note = '' },
          i
        ) => (
          <LabelContainer key={i}>
            <FormControlLabel
              value={value}
              control={<MaterialUIRadio color={color} />}
              label={label}
              disabled={disabled}
            />
            {note && <TooltipNote>{note}</TooltipNote>}
          </LabelContainer>
        )
      )}
    </RadioGroup>
  )
}

export default Radio
