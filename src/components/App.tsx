import React, { useRef } from 'react'

import '../app.css'
import Header from './Header'
import Footer from './Footer'
import Intro from './Intro'
import Habitat from './Habitat'
import Videos from './Videos'
import Facts from './Facts'

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
        <section ref={introRef}>
          <Intro />
        </section>
        <section ref={factsRef}>
          <Facts />
        </section>
        <section ref={habitatRef}>
          <Habitat />
        </section>
        <section ref={videosRef}>
          <Videos />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
