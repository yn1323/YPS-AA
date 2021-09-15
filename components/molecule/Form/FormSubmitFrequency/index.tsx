import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import Selectbox from '@atom/Input/Selectbox'
import { SUBMIT_FREQUENCY } from '@constant/common'
import FormUserBase from '@molecule/Form/FormUserBase'

export interface Props {
  setter: (v: string) => void
}

const Container = styled.div`
  ${tw`w-32`}
`

const FormSubmitFrequency: FC<Props> = ({ setter }) => {
  return (
    <FormUserBase
      definition="シフト提出頻度"
      item={
        <Container>
          <Selectbox
            options={SUBMIT_FREQUENCY}
            setter={setter}
            initialValue="2w"
          />
        </Container>
      }
    />
  )
}

export default FormSubmitFrequency
