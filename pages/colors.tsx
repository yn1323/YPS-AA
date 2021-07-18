import { Box, Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import ButtonWithBackgroundColor from 'components/SampleTemplate'

const RedText = styled.span`
  font-size: 50px;
  color: red;
`

const StyledButton = styled(Button)`
  background-color: green;
`

const Home: React.FC = () => {
  return (
    <Box>
      <Button color="primary" variant="contained">
        プライマリー
      </Button>

      <StyledButton variant="contained">みどり</StyledButton>

      <ButtonWithBackgroundColor>きいろ</ButtonWithBackgroundColor>

      <RedText>あか</RedText>
    </Box>
  )
}

export default Home
