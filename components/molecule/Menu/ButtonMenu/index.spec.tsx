import React from 'react'
import stories from './index.stories'
import Component, { TextButton } from '.'
import { ADMIN_MENU, TIMECARD } from '@constant/layout/menus'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  test(`${stories.title}-snapshot`, () => {
    const wrapper = mountWithTheme(
      <Component {...ADMIN_MENU[0]}>LABEL</Component>
    )
    expect(wrapper).toMatchSnapshot()
    const wrapper2 = mountWithTheme(
      <Component {...TIMECARD[0]}>LABEL</Component>
    )
    expect(wrapper2).toMatchSnapshot()
  })

  test(`${stories.title}-event`, () => {
    const component = mountWithTheme(
      <Component {...ADMIN_MENU[0]}>LABEL</Component>
    )
    component.find(TextButton).map(button => button.simulate('click'))
  })
})