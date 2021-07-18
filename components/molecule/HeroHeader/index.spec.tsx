import * as React from 'react'
import renderer from 'react-test-renderer'
import Component from '.'
import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props: any) => <img {...props} />,
})

test(Component.name, async () => {
  const component = await renderer.create(<Component />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
