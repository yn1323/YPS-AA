import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useRef } from 'react'
import Component, { Props } from '.'
import { USER_CONFIG } from '@constant/config'

const COMPONENT_NAME = 'FormShiftRange'

export default {
  title: `molecule/Form/${COMPONENT_NAME}`,
  component: Component,
  args: {
    startInitialValue: USER_CONFIG.startShiftTime,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    startTimeSetter: () => {},
    endInitialValue: USER_CONFIG.endShiftTime,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    endTimeSetter: () => {},
  } as Props,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => {
  return <Component {...args} />
}

export const Basic = Template.bind({})
