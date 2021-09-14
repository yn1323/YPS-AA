import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component, { Props } from '.'

export default {
  title: `molecule/Form/FormUserType`,
  component: Component,
  args: {
    groupName: 'age',
    initialVal: '200',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setter: v => {},
    options: [
      { value: '100', label: 'hundred' },
      { value: '200', label: 'two-hundred' },
      { value: '300', label: 'disabled', disabled: true },
      { value: '400', label: 'disabled = false', disabled: false },
      { value: '500', label: 'color-default', color: 'default' },
      { value: '600', label: 'color-secondary', color: 'secondary' },
    ],
    row: true,
  } as Props,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Basic = Template.bind({})
