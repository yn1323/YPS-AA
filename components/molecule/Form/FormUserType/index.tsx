import React, { FC } from 'react'
import Radio, { Option } from '@atom/Radio'
import FormUserBase from '@molecule/Form/FormUserBase'

const GROUP_NAME = 'USER_TYPE'
const INITIAL_VALUE = 'user'
const OPTION: Option[] = [
  {
    value: 'user',
    label: '管理ユーザー',
    note: '店舗管理者・シフト管理者はこちら',
  },
  { value: 'admin', label: '一般ユーザー', note: '従業員・アルバイトはこちら' },
]

export interface Props {
  setter: (v: string) => void
}

const FormUserType: FC<Props> = ({ setter }) => {
  return (
    <FormUserBase
      definition="ユーザー種別"
      item={
        <Radio
          groupName={GROUP_NAME}
          initialValue={INITIAL_VALUE}
          options={OPTION}
          setter={setter}
        />
      }
    />
  )
}

export default FormUserType
