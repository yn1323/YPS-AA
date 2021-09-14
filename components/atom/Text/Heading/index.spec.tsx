import React from 'react'
import stories from './index.stories'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  test(`${stories.title}-snapshot`, () => {
    const wrapper = mountWithTheme(<Component type="sub">Heading</Component>)
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ showUnderline: true })
    expect(wrapper).toMatchSnapshot()
  })
})
