import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component, { Props } from '.'

const COMPONENT_NAME = 'Switch'

export default {
  title: `atom/Button/${COMPONENT_NAME}`,
  component: Component,
  args: {
    color: 'primary',
    disabled: false,
    initialChecked: true,
    size: 'medium',
    label: 'label',
    name: '',
  } as Props,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <div style={{ height: 100 }}>
    <Component {...args} />
  </div>
)

export const Basic = Template.bind({})
