import React, { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import Selectbox from '@atom/Input/Selectbox'
import { TIME_UNIT } from '@constant/common'
import { ShiftTimeUnit } from '@constant/config'
import FormUserBase from '@molecule/Form/FormUserBase'

export interface Props {
  initialValue: ShiftTimeUnit
  setter: Dispatch<SetStateAction<ShiftTimeUnit>>
}

const Container = styled.div`
  ${tw`w-32`}
`

const FormTimeUnit: FC<Props> = ({ initialValue, setter }) => {
  return (
    <FormUserBase
      definition="シフト作成時間単位"
      item={
        <Container>
          <Selectbox
            initialValue={initialValue}
            options={TIME_UNIT}
            setter={setter as (v: string) => void}
          />
        </Container>
      }
    />
  )
}

export default FormTimeUnit
