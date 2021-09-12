import React from 'react'
import stories from './index.stories'
import Component, { Props } from '.'
import { mountWithTheme } from '@test/TestWrapper'

const COMPONENT_NAME = 'Textbox'

describe(`${COMPONENT_NAME}`, () => {
  const component = mountWithTheme(<Component {...(stories.args as Props)} />)
  test(`${COMPONENT_NAME}-snapshot`, () => {
    expect(component).toMatchSnapshot()
  })
})
