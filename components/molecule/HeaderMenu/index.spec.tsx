import ButtonMenu from '@atom/ButtonMenu'
import { mountWithTheme } from '@test/TestWrapper'
import React from 'react'
import Component from '.'

test(`${Component.name}-snapshot`, () => {
  const wrapper = mountWithTheme(<Component />)
  expect(wrapper).toMatchSnapshot()
  wrapper.setProps({ isAdmin: true, showTimeCard: true })
  expect(wrapper).toMatchSnapshot()
})

test(`${Component.name}-event`, async () => {
  const component1 = await mountWithTheme(<Component isAdmin showTimeCard />)
  component1.find(ButtonMenu).map(button => button.simulate('click'))
})
