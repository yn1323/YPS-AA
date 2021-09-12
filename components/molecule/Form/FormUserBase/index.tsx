import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

export interface Props {
  definition: string
  item: JSX.Element
}

const Container = styled.div`
  ${tw`flex`}
`
const Title = styled.div`
  ${tw`w-40 flex items-center`}
  font-size: 1rem;
`

const FormUserBase: FC<Props> = ({ definition, item }) => {
  return (
    <Container>
      <Title>{definition}</Title>
      {item}
    </Container>
  )
}

export default FormUserBase
