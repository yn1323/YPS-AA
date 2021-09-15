import React, { FC } from 'react'
import Switch from '@atom/Button/Switch'
import FormUserBase from '@molecule/Form/FormUserBase'

const LABEL = {
  switchOn: '一般ユーザーに許可する',
  switchOff: '管理ユーザーのみ許可する',
} as const

export interface Props {
  setter: (v: boolean) => void
}

const FormTimeCardAuth: FC<Props> = ({ setter }) => {
  return (
    <FormUserBase
      definition="タイムカード入力権限"
      item={
        <Switch
          setter={setter}
          initialChecked={false}
          labelOnFalse={LABEL.switchOff}
        >
          {LABEL.switchOn}
        </Switch>
      }
    />
  )
}

export default FormTimeCardAuth
