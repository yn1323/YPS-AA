import React from 'react'
import stories from './index.stories'
import Component, { Props } from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  const component = mountWithTheme(<Component ref={{} as any} />)
  test(`${stories.title}-snapshot`, () => {
    expect(component).toMatchSnapshot()
    component.setProps(stories.args as any)
  })
})
