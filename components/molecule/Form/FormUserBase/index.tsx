import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

type Position = 'center' | 'bottom'
export interface Props {
  definition: string
  item: JSX.Element
  position?: Position
}

const Container = styled.div`
  ${tw`flex`}
`
const Title = styled.div<{ $position: Position }>`
  ${tw`w-60 flex items-center`}
  font-size: 1rem;
  padding-top: ${({ $position }) => ($position === 'bottom' ? '0.8rem' : 0)};
`

const FormUserBase: FC<Props> = ({ definition, item, position = 'center' }) => {
  return (
    <Container>
      <Title $position={position}>{definition}</Title>
      {item}
    </Container>
  )
}

export default FormUserBase
