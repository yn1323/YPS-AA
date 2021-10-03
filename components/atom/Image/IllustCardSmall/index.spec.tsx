import React from 'react'
import stories from './index.stories'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  test(`${stories.title}-snapshot`, () => {
    const wrapper = mountWithTheme(
      <Component imageUri="/images/functionalIcon1.png" text="sampletext" />
    )
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ isGray: true })
    expect(wrapper).toMatchSnapshot()
  })
})
