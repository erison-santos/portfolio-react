import { ThemeProvider } from "styled-components";
import { defaulTheme } from "./assets/styles/themes/default";
import { Card } from 'reactstrap'

import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";

export function App() {

  return (
    <ThemeProvider theme={defaulTheme}>

        <Hero />
        <About />
        <Expertise />
        <Portfolio />    </ThemeProvider>
  )
}