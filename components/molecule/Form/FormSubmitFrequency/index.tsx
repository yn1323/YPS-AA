import React, { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import Selectbox from '@atom/Input/Selectbox'
import { SUBMIT_FREQUENCY } from '@constant/common'
import { ShiftSubmitFrequency } from '@constant/config'
import FormUserBase from '@molecule/Form/FormUserBase'

export interface Props {
  initialValue: ShiftSubmitFrequency
  setter: Dispatch<SetStateAction<ShiftSubmitFrequency>>
}

const Container = styled.div`
  ${tw`w-32`}
`

const FormSubmitFrequency: FC<Props> = ({ initialValue, setter }) => {
  return (
    <FormUserBase
      definition="シフト提出頻度"
      item={
        <Container>
          <Selectbox
            options={SUBMIT_FREQUENCY}
            setter={setter as (v: string) => void}
            initialValue={initialValue}
          />
        </Container>
      }
    />
  )
}

export default FormSubmitFrequency
