# Styled Components

Styled components let's you keep your CSS within scope and provides a lot of benefits like (copied from their <a href="https://www.styled-components.com/docs/basics#motivation">Styled Component Docs</a>):

- Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.

- No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.

- Easier deletion of CSS: it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.

- Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.

- Painless maintenance: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.

- Automatic vendor prefixing: write your CSS to the current standard and let styled-components handle the rest.

## Getting Started

First let's install the package with yarn.

`yarn add styled-components`

Great, now let's import it and start playing around with it. The styled default export it provides us let's us create normal html tags using tag literals.

```
import React from "react"
import styled, { ThemeProvider } from "styled-components"

const Title = styled.h1`
color: blue
`


function App() {
  return (
    <div className="App">
      <Title>Hello</Title>
    </div>
  )
}

export default App
```

Great, next we'll be extending one component's styles and customizing it a bit.

```
import React from "react"
import styled, { ThemeProvider } from "styled-components"

const Title = styled.h1`
color: blue
`

// Extends Title
const UnderlinedTitle = styled(Title)`
  padding: 20px;
  text-decoration: underline;

function App() {
  return (
    <div className="App">
      <Title>Hello</Title>
      <UnderlinedTitle>My UnderlinedParagraph</UnderlinedTitle>
    </div>
  )
}

export default App
`
```

Alright, next -> You can also pass a function for the theme prop. This function will receive the parent theme, that is from another <ThemeProvider> higher up the tree. This way themes themselves can be made contextual.

```
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
```
