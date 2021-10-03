import React from 'react'
import stories from './index.stories'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  test(`${stories.title}-snapshot`, () => {
    const wrapper = mountWithTheme(
      <Component
        grayIsOnRight={true}
        imageUri="/images/storyset/schedule.svg"
        text="sampletext"
      />
    )
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({
      grayIsOnRight: false,
      imageUri: '/images/storyset/schedule.svg',
      text: 'sampletext',
      size: 220,
    })
    expect(wrapper).toMatchSnapshot()
  })
})
