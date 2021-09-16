import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component, { Props } from '.'

export default {
  title: `molecule/Form/FormUserType`,
  component: Component,
  args: {
    initialValue: 'admin',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setter: v => {},
  } as Props,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Basic = Template.bind({})
