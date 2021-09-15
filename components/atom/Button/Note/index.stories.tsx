import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component from '.'

export default {
  title: `atom/Button/Note`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = () => (
  <Component>Tooltip Text</Component>
)

export const Basic = Template.bind({})