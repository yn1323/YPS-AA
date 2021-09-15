import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useRef } from 'react'
import Component, { Props } from '.'

const COMPONENT_NAME = 'FormTimeUnit'

export default {
  title: `molecule/Form/${COMPONENT_NAME}`,
  component: Component,
  args: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setter: () => {},
  } as Props,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => {
  return <Component {...args} />
}

export const Basic = Template.bind({})
