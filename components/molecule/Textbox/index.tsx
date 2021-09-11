import { TextField, TextFieldProps } from '@material-ui/core'
import React, { FC, forwardRef, useState } from 'react'

export interface Props {
  error?: boolean
  disabled?: boolean
  required?: boolean
  defaultValue?: string
  helperText?: string
  placeholder?: string
  maxLength?: number
  ref: TextFieldProps['inputRef']
  setter: (v: string) => void
}

const Textbox: FC<Props> = forwardRef(
  (
    {
      error = false,
      disabled = false,
      required = false,
      defaultValue = '',
      helperText = '',
      placeholder = '',
      maxLength = 64,
    },
    ref
  ) => {
    const [defaultVal] = useState(defaultValue)

    return (
      <TextField
        fullWidth
        inputRef={ref}
        error={error}
        inputProps={{ maxLength }}
        disabled={disabled}
        required={required}
        defaultValue={defaultVal}
        helperText={error && helperText}
        placeholder={placeholder}
      />
    )
  }
)

export default Textbox
