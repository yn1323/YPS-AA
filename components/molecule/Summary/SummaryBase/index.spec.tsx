import React from 'react'
import stories from './index.stories'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  test(`${stories.title}-snapshot`, () => {
    const wrapper = mountWithTheme(<Component {...(stories.args as any)} />)
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ children: [] })
    expect(wrapper).toMatchSnapshot()
  })
})