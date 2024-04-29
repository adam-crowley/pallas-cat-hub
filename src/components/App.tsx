import Header from './Header'
import Footer from './Footer'
import '../app.css'
import Intro from './Intro'
import Habitat from './Habitat'
import Videos from './Videos'
import Facts from './Facts'
import Gallery from './gallery'

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Facts />
        <Habitat />
        <Videos />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App
