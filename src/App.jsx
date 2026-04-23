import React from 'react'
import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx'
import Taste from './sections/Taste.jsx'
import Quality from './sections/Quality.jsx'
import Parallex from './sections/Parallex.jsx'
import Footer from './components/Footer.jsx'
import SmoothScroll from './SmoothScroll'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <Header />
        <Hero />
        <Taste />
        <Quality />
        <Parallex />
        <Footer />
      </SmoothScroll>
    </ThemeProvider>
  )
}

export default App
