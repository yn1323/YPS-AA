import { Moment } from 'moment'
import React, { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import PickerTime from '@atom/Input/PickerTime'
import { ShiftTime } from '@constant/config'
import FormUserBase from '@molecule/Form/FormUserBase'

export interface Props {
  startInitialValue: Moment
  startTimeSetter: Dispatch<SetStateAction<ShiftTime>>
  endInitialValue: Moment
  endTimeSetter: Dispatch<SetStateAction<ShiftTime>>
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
    font-size: 0.9rem;
    ${tw`absolute mt-3`};
  }
`

const FormShiftRange: FC<Props> = ({
  startInitialValue,
  startTimeSetter,
  endInitialValue,
  endTimeSetter,
}) => {
  return (
    <FormUserBase
      position="bottom"
      definition="シフト設定可能時間"
      item={
        <Wrapper>
          <PickerContainer>
            <PickerTime
              initialTime={startInitialValue}
              margin="none"
              setter={startTimeSetter}
              label="開始時間"
            />
          </PickerContainer>
          <Delimeter />
          <PickerContainer>
            <PickerTime
              initialTime={endInitialValue}
              margin="none"
              setter={endTimeSetter}
              label="終了時間"
            />
          </PickerContainer>
        </Wrapper>
      }
    />
  )
}

export default FormShiftRange
