import React from 'react'
import stories from './index.stories'
import Component from '.'
import { mountWithTheme } from '@test/TestWrapper'

describe(`${stories.title}`, () => {
  const component = mountWithTheme(
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <Component onClick={() => {}}>label</Component>
  )
  test(`${stories.title}-snapshot`, () => {
    expect(component).toMatchSnapshot()
    component.setProps(stories.args as any)
    expect(component).toMatchSnapshot()
  })
})
