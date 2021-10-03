import { AccessTime } from '@material-ui/icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'
import { theme } from '@constant/theme'

export default {
  title: `atom/Text/Heading`,
  component: Component,
  args: {
    type: 'sub',
    underline: true,
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args}>Heading</Component>
)

export const Basic = Template.bind({})
export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: <AccessTime style={{ color: theme.palette.text.secondary }} />,
  link: 'link',
}
