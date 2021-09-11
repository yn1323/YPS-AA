import React from 'react'
import Component from '.'
import { COMMON_MENU } from '@constant/layout/menus'
import { disableWarn, mountWithTheme } from '@test/TestWrapper'

describe(`${Component.name}`, () => {
  test(`${Component.name}-snapshot`, () => {
    const args = {
      show: false,
      setShow: (condition: boolean) => {
        console.log(condition)
      },
      anchorEl: document.getElementsByTagName('body')[0],
    }

    const wrapper = mountWithTheme(
      <Component {...args}>
        <div />
      </Component>
    )
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({
      ...args,
      show: true,
      placement: 'bottom-end',
      timeout: 200,
    })
    expect(wrapper).toMatchSnapshot()
  })

  test(`${Component.name}-event`, () => {
    const args = {
      show: true,
      setShow: (condition: boolean) => {
        console.log(condition)
      },
      items: COMMON_MENU[0].items,
      anchorEl: document.getElementsByTagName('body')[0],
    }
    const wrapper = mountWithTheme(
      <Component {...args}>
        <div>hello</div>
      </Component>
    )
    wrapper.find('span').map(elem => elem.simulate('click'))
  })

  disableWarn()
})
