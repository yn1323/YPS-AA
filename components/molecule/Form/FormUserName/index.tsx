import React, { FC, forwardRef } from 'react'
import Textbox, { Props as TextboxProps } from '@atom/Input/Textbox'
import { MAX_LENGTH } from '@constant/validation'
import FormUserBase from '@molecule/Form/FormUserBase'

const PLACEHOLDER = '〇〇 XX'
const LENGTH = MAX_LENGTH.USER_NAME

export interface Props
  extends Pick<
    TextboxProps,
    Partial<'error' | 'defaultValue' | 'required' | 'helperText'> | 'ref'
  > {}

const FormUserName: FC<Props> = forwardRef(
  (
    { error = false, defaultValue = '', required = false, helperText = '' },
    ref
  ) => {
    return (
      <FormUserBase
        definition="ユーザー名"
        item={
          <Textbox
            maxLength={LENGTH}
            placeholder={PLACEHOLDER}
            error={error}
            defaultValue={defaultValue}
            required={required}
            helperText={helperText}
            ref={ref}
          />
        }
      />
    )
  }
)

export default FormUserName
