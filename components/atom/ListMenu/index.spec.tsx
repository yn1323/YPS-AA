import { COMMON_MENU } from '@constant/layout/menus'
import { mountWithTheme } from '@test/TestWrapper'
import React from 'react'
import Component from '.'

test(`${Component.name}-snapshot`, () => {
  const args = {
    show: true,
    setShow: () => {
      console.log('close')
    },
    items: COMMON_MENU[0].items,
    delimeterPosition: [1],
    anchorEl: document.getElementsByTagName('body')[0],
  }
  const wrapper = mountWithTheme(<Component {...args} />)
  expect(wrapper).toMatchSnapshot()
})
