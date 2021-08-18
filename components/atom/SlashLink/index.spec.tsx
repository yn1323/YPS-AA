import { FOOTER_LINKS } from '@constant/common'
import TestWrapper from '@test/TestWrapper'
import { render } from 'enzyme'
import React from 'react'
import { act } from 'react-test-renderer'
import Component from '.'

test(Component.name, async () => {
  let component
  await act(async () => {
    component = await render(
      <TestWrapper>
        <Component links={FOOTER_LINKS} />
      </TestWrapper>
    )
  })
  expect(component).toMatchSnapshot()
})
