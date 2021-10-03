import { ErrorOutline } from '@material-ui/icons'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import SummaryBase from '../SummaryBase'
import Note from '@atom/Button/Note'
import Heading from '@atom/Text/Heading'
import { theme } from '@constant/theme'

type SuspendInfo = {
  user: string
  type: string
  dateRange: string
  memo: string
}

interface Props {
  suspendInfo: SuspendInfo[]
}

const Body = styled.div``
const HeaderIcon = (
  <ErrorOutline style={{ color: theme.palette.text.secondary }} />
)

const Suspend: FC<Props> = ({ suspendInfo }) => {
  return (
    <SummaryBase>
      <Heading type="sub" icon={HeaderIcon} underline link="here">
        承認待ち
      </Heading>
      <Body>
        <div>
          <span>直近5件の承認申請が表示されます。</span>
          <Note>もっと見るにはクリック！</Note>
        </div>
      </Body>
    </SummaryBase>
  )
}

export default Suspend
