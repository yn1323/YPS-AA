import React, { FC, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import Button from '@atom/Button/Button'
import Heading from '@atom/Text/Heading'
import {
  ShiftSubmitFrequency,
  ShiftTime,
  ShiftTimeUnit,
  TimeCardAuth,
  UserType,
  USER_CONFIG,
} from '@constant/config'
import { mediaQueries } from '@constant/mixins'
import { FORM_ERROR_TEXT } from '@constant/validation'
import FormShiftRange from '@molecule/Form/FormShiftRange'
import FormShopId from '@molecule/Form/FormShopId'
import FormShopName from '@molecule/Form/FormShopName'
import FormSubmitFrequency from '@molecule/Form/FormSubmitFrequency'
import FormTimeCardAuth from '@molecule/Form/FormTimeCardAuth'
import FormTimeUnit from '@molecule/Form/FormTimeUnit'
import FormUserName from '@molecule/Form/FormUserName'
import FormUserType from '@molecule/Form/FormUserType'

const Root = styled.div`
  ${tw`w-full`}
  ${mediaQueries('md')} {
    ${tw`w-2/3`}
  }
`
const Container = styled.section`
  ${tw`mb-8 md:mb-12`}
`
const Items = styled.div`
  > * {
    ${tw`my-6 md:my-3`}
  }
`
const Description = styled.p`
  ${tw`mt-1`}
`
const Submit = styled.div`
  ${tw`flex`}
  justify-content: flex-end;
`

const InitialConfigForm: FC = () => {
  const [userType, setUserType] = useState<UserType>(USER_CONFIG.userType)
  const [startShiftTime, setStartShiftTime] = useState<ShiftTime>(
    USER_CONFIG.startShiftTime
  )
  const [endShiftTime, setEndShiftTime] = useState<ShiftTime>(
    USER_CONFIG.endShiftTime
  )
  const [shiftTimeUnit, setShiftTimeUnit] = useState<ShiftTimeUnit>(
    USER_CONFIG.shiftTimeUnit
  )
  const [
    shiftSubmitFrequency,
    setShiftSubmitFrequency,
  ] = useState<ShiftSubmitFrequency>(USER_CONFIG.shiftSubmitFrequency)
  const [timeCardAuth, setTimeCardAuth] = useState<TimeCardAuth>(false)

  const userNameRef = useRef<HTMLInputElement>(null)
  const shopNameRef = useRef<HTMLInputElement>(null)
  const shopIdRef = useRef<HTMLInputElement>(null)

  const [success, setSuccess] = useState({
    userName: true,
    shopId: true,
    shopName: true,
  })

  const isAdmin = useMemo(() => userType === 'admin', [userType])

  const handleSubmit = () => {
    let targetValidation
    if (userType === 'general') {
      targetValidation = [userNameRef.current!.value, shopIdRef.current!.value]
    } else if (userType === 'admin') {
      targetValidation = [
        userNameRef.current!.value,
        shopNameRef.current!.value,
      ]
    }
    const allSuccess = targetValidation?.every(v => v)
    if (!allSuccess) {
      setSuccess({
        userName: !!userNameRef.current!.value,
        shopId: !!shopIdRef.current?.value ?? true,
        shopName: !!shopNameRef.current?.value ?? true,
      })
    }
  }

  return (
    <Root>
      <Container>
        <Heading type="sub" underline>
          YPS初期設定
        </Heading>
        <Heading type="description">
          <Description>
            YPSユーザーと店舗の設定を行います。
            <br />
            設定内容は後からでも変更できます。
          </Description>
        </Heading>
        <Items>
          <FormUserType initialValue={userType} setter={setUserType} />
          <FormUserName
            error={!success.userName}
            helperText={FORM_ERROR_TEXT.userName}
            ref={userNameRef}
          />

          {!isAdmin && (
            <FormShopId
              error={!success.shopId}
              helperText={FORM_ERROR_TEXT.shopId}
              ref={shopIdRef}
            />
          )}
        </Items>
      </Container>

      {isAdmin && (
        <Container>
          <Heading type="sub" underline>
            店舗情報設定
          </Heading>
          <Items>
            <FormShopName
              error={!success.shopName}
              helperText={FORM_ERROR_TEXT.shopName}
              ref={shopNameRef}
            />
          </Items>
        </Container>
      )}

      {isAdmin && (
        <Container>
          <Heading type="sub" underline>
            シフト設定
          </Heading>
          <Items>
            <FormShiftRange
              startInitialValue={startShiftTime}
              startTimeSetter={setStartShiftTime}
              endInitialValue={endShiftTime}
              endTimeSetter={setEndShiftTime}
            />
            <FormTimeUnit
              initialValue={shiftTimeUnit}
              setter={setShiftTimeUnit}
            />
            <FormSubmitFrequency
              initialValue={shiftSubmitFrequency}
              setter={setShiftSubmitFrequency}
            />
          </Items>
        </Container>
      )}

      {isAdmin && (
        <Container>
          <Heading type="sub" underline>
            権限設定
          </Heading>
          <Items>
            <FormTimeCardAuth
              initialValue={timeCardAuth}
              setter={setTimeCardAuth}
            />
          </Items>
        </Container>
      )}
      <Submit>
        <Button onClick={handleSubmit}>設定完了</Button>
      </Submit>
    </Root>
  )
}

export default InitialConfigForm
