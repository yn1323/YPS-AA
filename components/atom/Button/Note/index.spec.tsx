import React from 'react'
import stories from './index.stories'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  const component = mountWithTheme(<Component>Tooltip Note</Component>)
  test(`${stories.title}-snapshot`, () => {
    expect(component).toMatchSnapshot()
  })
})
