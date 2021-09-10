import { shallow } from 'enzyme'
import React from 'react'
import Component from '.'
import { FOOTER_LINKS } from '@constant/common'
import { mountWithTheme, ThemeProvideWrapper } from '@test/TestWrapper'

test(`${Component.name}-snapshot`, () => {
  const wrapper = mountWithTheme(<Component links={FOOTER_LINKS} />)
  expect(wrapper).toMatchSnapshot()
})
