import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'

export default {
  title: `atom/Table/SummaryTable`,
  component: Component,
  args: {
    header: ['申請ユーザー', '種別', '対象', 'メモ'],
    body: [
      ['AAA', 'シフト申請', '11/1~11/14', 'メモです。'],
      ['BB', 'タイムカード編集', '11/1', 'メモです2。'],
    ],
    spHideColumnIndex: [3],
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Basic = Template.bind({})
