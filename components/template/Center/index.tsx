import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

const CenterDiv = styled.div`
  ${tw`flex justify-center items-center`}
`

const Center: React.FC = ({ children }) => {
  return <CenterDiv>{children}</CenterDiv>
}

export default Center
