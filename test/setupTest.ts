import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme'
import React from 'react'

// Delete warning
React.useLayoutEffect = React.useEffect
Enzyme.configure({ adapter: new EnzymeAdapter() })
