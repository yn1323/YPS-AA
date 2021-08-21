import ButtonMenu from '@atom/ButtonMenu'
import TestWrapper from '@test/TestWrapper'
import { mount, render } from 'enzyme'
import React from 'react'
import { act } from 'react-test-renderer'
import Component, { handler1 } from '.'

test(Component.name, async () => {
  let component
  await act(async () => {
    component = await render(
      <TestWrapper>
        <Component isAdmin showTimeCard />
      </TestWrapper>
    )
  })
  expect(component).toMatchSnapshot()
  let component2
  await act(async () => {
    component2 = await render(
      <TestWrapper>
        <Component />
      </TestWrapper>
    )
  })
  expect(component2).toMatchSnapshot()
})

test(`${Component.name}-event`, async () => {
  const component1 = await mount(
    <TestWrapper>
      <Component isAdmin showTimeCard />
    </TestWrapper>
  )

  component1.find(ButtonMenu).map(button => button.simulate('click'))
})
