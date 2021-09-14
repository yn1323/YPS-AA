import React from 'react'
import stories from './index.stories'
import Component, { Props } from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  const component = mountWithTheme(<Component {...(stories.args as Props)} />)
  test(`${Component.name}-snapshot`, () => {
    expect(component).toMatchSnapshot()
  })
})
