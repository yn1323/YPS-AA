import React from 'react'
import stories from './index.stories'
import Component from '.'
import { FOOTER_LINKS } from '@constant/common'
import { mountWithTheme, ThemeProvideWrapper } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  test(`${stories.title}-snapshot`, () => {
    const wrapper = mountWithTheme(<Component links={FOOTER_LINKS} />)
    expect(wrapper).toMatchSnapshot()
  })
})
