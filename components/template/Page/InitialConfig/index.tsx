import React, { FC, useMemo, useRef, useState } from 'react'
import InitialConfigForm from '@organism/InitialConfigForm'
import Center from '@template/Layout/Center'

const InitialConfig: FC = () => {
  return (
    <Center>
      <InitialConfigForm />
    </Center>
  )
}

export default InitialConfig
