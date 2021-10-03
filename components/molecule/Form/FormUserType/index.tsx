import React, { Dispatch, FC, SetStateAction } from 'react'
import Radio, { Option } from '@atom/Input/Radio'
import { UserType } from '@constant/config'
import FormUserBase from '@molecule/Form/FormUserBase'

const GROUP_NAME = 'USER_TYPE'
const OPTION: Option[] = [
  {
    value: 'admin',
    label: '管理ユーザー',
    note: '店舗管理者・シフト管理者はこちら',
  },
  {
    value: 'general',
    label: '一般ユーザー',
    note: '従業員・アルバイトはこちら',
  },
]

export interface Props {
  initialValue: UserType
  setter: Dispatch<SetStateAction<UserType>>
}

const FormUserType: FC<Props> = ({ initialValue, setter }) => {
  return (
    <FormUserBase
      definition="ユーザー種別"
      item={
        <Radio
          groupName={GROUP_NAME}
          initialValue={initialValue}
          options={OPTION}
          setter={setter as (v: string) => void}
        />
      }
    />
  )
}

export default FormUserType
