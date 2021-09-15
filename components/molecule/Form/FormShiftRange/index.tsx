import { Moment } from 'moment'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import PickerTime from '@atom/Input/PickerTime'
import FormUserBase from '@molecule/Form/FormUserBase'

export interface Props {
  startTimeSetter: (d: Moment) => void
  endTimeSetter: (d: Moment) => void
}

const Wrapper = styled.div`
  ${tw`flex relative items-center`}
`
const PickerContainer = styled.div`
  ${tw`w-15`}
`
const Delimeter = styled.div`
  ${tw`relative w-10 flex relative items-center justify-center`}
  &:before {
    content: '〜';
    font-size: 1rem;
    ${tw`absolute mt-3`};
  }
`

const FormShiftRange: FC<Props> = ({ startTimeSetter, endTimeSetter }) => {
  return (
    <FormUserBase
      position="bottom"
      definition="シフト設定可能時間"
      item={
        <Wrapper>
          <PickerContainer>
            <PickerTime
              margin="none"
              setter={startTimeSetter}
              label="開始時間"
            />
          </PickerContainer>
          <Delimeter />
          <PickerContainer>
            <PickerTime margin="none" setter={endTimeSetter} label="終了時間" />
          </PickerContainer>
        </Wrapper>
      }
    />
  )
}

export default FormShiftRange
