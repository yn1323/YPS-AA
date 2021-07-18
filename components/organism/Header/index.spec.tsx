import React from 'react'
import renderer from 'react-test-renderer'
import Component from '.'

test(Component.name, () => {
  const component = renderer.create(<Component />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
