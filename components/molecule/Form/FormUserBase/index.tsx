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
  ${tw`flex justify-start`}
`

const TitleWrapper = styled.div`
  ${tw` flex items-center`}
  width: 180px;
`
const Title = styled.div<{ $position: Position }>`
  ${tw`w-60`}
  font-size: 0.9rem;
  padding-top: ${({ $position }) => ($position === 'bottom' ? '0.8rem' : 0)};
`

const FormUserBase: FC<Props> = ({ definition, item, position = 'center' }) => {
  return (
    <Container>
      <TitleWrapper>
        <Title $position={position}>{definition}</Title>
      </TitleWrapper>
      {item}
    </Container>
  )
}

export default FormUserBase
