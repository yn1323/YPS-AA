import React from 'react'
import stories from './index.stories'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  const wrapper = mountWithTheme(<Component isLoggedIn={false} />)
  test(`${stories.title}-snapshot`, () => {
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ isLoggedIn: true })
    expect(wrapper).toMatchSnapshot()
  })
})
