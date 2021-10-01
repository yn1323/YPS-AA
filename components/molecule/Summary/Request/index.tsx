import { Send } from '@material-ui/icons'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import SummaryBase from '../SummaryBase'
import Note from '@atom/Button/Note'
import Heading from '@atom/Text/Heading'
import { theme } from '@constant/theme'

type RequestInfo = {
  user: string
  type: string
  dateRange: string
  memo: string
}

interface Props {
  requestInfo: RequestInfo[]
}

const Body = styled.div``
const HeaderIcon = <Send style={{ color: theme.palette.text.secondary }} />

const Request: FC<Props> = ({ requestInfo }) => {
  return (
    <SummaryBase>
      <Heading type="sub" icon={HeaderIcon} underline link="here">
        申請状況
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

export default Request
