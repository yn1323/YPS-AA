import { Typography } from '@material-ui/core'
import { Today } from '@material-ui/icons'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'
import SummaryBase from '../SummaryBase'
import Avatar from '@atom/Image/Avatar'
import Heading from '@atom/Text/Heading'
import { theme } from '@constant/theme'

interface Props {
  month: string
  name: string
  time: number
  imageUrl: string
}

const InformationWrapper = styled.div`
  ${tw`flex items-center`}
  > *:nth-child(2) {
    ${tw`ml-2`}
  }
`
const HeaderIcon = <Today style={{ color: theme.palette.text.secondary }} />

const WorkTime: FC<Props> = ({ month, name, time, imageUrl }) => {
  const title = `${month}月の勤務状況`
  const info = `${name}さんの${month}月の勤務時間は、${time}時間です。`
  return (
    <SummaryBase>
      <Heading type="sub" icon={HeaderIcon} underline>
        {title}
      </Heading>
      <InformationWrapper>
        <Avatar alt={name} url={imageUrl} />
        <Typography variant="body1">{info}</Typography>
      </InformationWrapper>
    </SummaryBase>
  )
}

export default WorkTime
