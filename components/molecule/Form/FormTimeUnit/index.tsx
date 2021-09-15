import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import Selectbox from '@atom/Input/Selectbox'
import { TIME_UNIT } from '@constant/common'
import FormUserBase from '@molecule/Form/FormUserBase'

export interface Props {
  setter: (v: string) => void
}

const Container = styled.div`
  ${tw`w-32`}
`

const FormTimeUnit: FC<Props> = ({ setter }) => {
  return (
    <FormUserBase
      definition="シフト作成時間単位"
      item={
        <Container>
          <Selectbox options={TIME_UNIT} setter={setter} initialValue="5" />
        </Container>
      }
    />
  )
}

export default FormTimeUnit
