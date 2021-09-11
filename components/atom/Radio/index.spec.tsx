import React from 'react'
import stories from './index.stories'
import Component, { Props } from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${Component.name}`, () => {
  const component = mountWithTheme(<Component {...(stories.args as Props)} />)
  test(`${Component.name}-snapshot`, () => {
    expect(component).toMatchSnapshot()
  })
})
