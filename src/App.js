import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  SimpleGrid,
} from '@chakra-ui/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Main from './components/Main';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Hero />
      <Main />
    </ChakraProvider>
  );
}

export default App;
