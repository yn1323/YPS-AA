import React, { FC } from 'react'
import Switch from '@atom/Button/Switch'
import FormUserBase from '@molecule/Form/FormUserBase'

const LABEL = {
  switchOn: '一般ユーザーの入力を許可',
  switchOff: '管理ユーザーのみ入力を許可',
} as const

export interface Props {
  initialValue: boolean
  setter: (v: boolean) => void
}

const FormTimeCardAuth: FC<Props> = ({ initialValue, setter }) => {
  return (
    <FormUserBase
      definition="タイムカード入力権限"
      item={
        <Switch
          setter={setter}
          initialChecked={initialValue}
          labelOnFalse={LABEL.switchOff}
        >
          {LABEL.switchOn}
        </Switch>
      }
    />
  )
}

export default FormTimeCardAuth
