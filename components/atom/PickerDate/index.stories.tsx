import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Component, { Props } from '.'

const COMPONENT_NAME = 'PickerDate'

export default {
  title: `atom/${COMPONENT_NAME}`,
  component: Component,
  args: {
    error: false,
    margin: 'normal',
    errorMessage: 'エラーメッセージ',
    label: 'ラベル',
    inputVariant: 'standard',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setter: () => {},
  } as Props,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Basic = Template.bind({})
