import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'

import '../app.css'
import Header from './Header'
import Footer from './Footer'

function App() {
  const introRef = useRef(null)
  const factsRef = useRef(null)
  const habitatRef = useRef(null)
  const videosRef = useRef(null)

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        refs={{ introRef, factsRef, habitatRef, videosRef }}
      />
      <main>
        <Outlet context={{ introRef, factsRef, habitatRef, videosRef }} />
      </main>
      <Footer />
    </>
  )
}

export default App
