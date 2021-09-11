import React from 'react'
import Component from '.'
import { COMMON_MENU } from '@constant/layout/menus'
import { disableWarn, mountWithTheme } from '@test/TestWrapper'

describe(`${Component.name}`, () => {
  test(`${Component.name}-snapshot`, () => {
    const args = {
      show: true,
      setShow: () => {
        console.log('close')
      },
      items: COMMON_MENU[0].items,
      anchorEl: document.getElementsByTagName('body')[0],
    }

    const wrapper = mountWithTheme(<Component {...args} />)
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({
      ...args,
      delimeterPosition: [1],
      placement: 'bottom-end',
    })
    expect(wrapper).toMatchSnapshot()
  })

  test(`${Component.name}-event`, () => {
    const args = {
      show: false,
      setShow: () => {
        console.log('close')
      },
      items: COMMON_MENU[0].items,
      anchorEl: document.getElementsByTagName('body')[0],
    }

    const wrapper = mountWithTheme(<Component {...args} />)
    wrapper.find('body').map(elem => elem.simulate('click'))
  })

  disableWarn()
})
