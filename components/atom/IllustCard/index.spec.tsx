import React from 'react'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

test(`${Component.name}-snapshot`, () => {
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
