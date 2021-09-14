import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component, { Props } from '.'

const COMPONENT_NAME = 'Selectbox'

export default {
  title: `atom/${COMPONENT_NAME}`,
  component: Component,
  args: {
    variant: 'standard',
    inputLabel: 'InputLabel',
    helperText: 'helperText',
    initialValue: '5',
    options: [
      {
        label: '5分毎',
        value: '5',
      },
      {
        label: '10分毎',
        value: '10',
      },
      {
        label: '15分毎',
        value: '15',
      },
      {
        label: '20分毎',
        value: '20',
      },
      {
        label: '30分毎',
        value: '30',
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setter: () => {},
  } as Props,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Basic = Template.bind({})
Basic.args = {}
