import React from "react"
import styled, { ThemeProvider } from "styled-components"

const Title = styled.h1`
  color: ${props => props.theme.fg};
  font-size: 100px;
  margin: 0;
  background: ${props => props.theme.bg};
`

// Extends Title
const UnderlinedTitle = styled(Title)`
  padding: 20px;
  text-decoration: underline;
`

// Define our `fg` and `bg` on the theme
const theme = {
  fg: "palevioletred",
  bg: "red"
}

function App() {
  return (
    <div className="App">
      <Title>Hello</Title>
      <ThemeProvider theme={theme}>
        <UnderlinedTitle>My UnderlinedParagraph</UnderlinedTitle>
      </ThemeProvider>
    </div>
  )
}

export default App
