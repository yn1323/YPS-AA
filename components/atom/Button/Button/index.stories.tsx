import { KeyboardVoice } from '@material-ui/icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component, { Props } from '.'

const COMPONENT_NAME = 'Button'

export default {
  title: `atom/Button/${COMPONENT_NAME}`,
  component: Component,
  args: {
    color: 'primary',
    variant: 'contained',
    disabled: false,
    size: 'medium',
    startIcon: <KeyboardVoice />,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: () => {},
  } as Props,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args}>this is button</Component>
)

export const Basic = Template.bind({})
