import React from 'react'
import stories from './index.stories'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  test(`${stories.title}-snapshot`, () => {
    const wrapper = mountWithTheme(<Component />)
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ isLoggedIn: true })
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ initialLogin: true })
    expect(wrapper).toMatchSnapshot()
  })
})
