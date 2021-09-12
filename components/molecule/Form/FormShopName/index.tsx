import React, { FC, forwardRef } from 'react'
import Textbox, { Props as TextboxProps } from '@atom/Textbox'
import { MAX_LENGTH } from '@constant/validation'
import FormUserBase from '@molecule/Form/FormUserBase'

const PLACEHOLDER = '店舗名を入力してください。'
const LENGTH = MAX_LENGTH.SHOP_NAME

export interface Props
  extends Pick<
    TextboxProps,
    Partial<'error' | 'defaultValue' | 'required' | 'helperText'> | 'ref'
  > {}

const FormShopName: FC<Props> = forwardRef(
  (
    { error = false, defaultValue = '', required = false, helperText = '' },
    ref
  ) => {
    return (
      <FormUserBase
        definition="店舗ID"
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

export default FormShopName
