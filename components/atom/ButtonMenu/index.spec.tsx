import { Delete } from '@material-ui/icons'
import React from 'react'
import renderer from 'react-test-renderer'
import Component from '.'

test(Component.name, () => {
  const component = renderer.create(
    <Component icon={<Delete />} clickHandler={() => console.log('OK')}>
      LABEL
    </Component>
  )
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()

  const component2 = renderer.create(
    <Component
      icon={<Delete />}
      clickHandler={() => console.log('OK')}
      showArrowDown={false}
    >
      LABEL
    </Component>
  )
  const tree2 = component2.toJSON()

  expect(tree2).toMatchSnapshot()
})
