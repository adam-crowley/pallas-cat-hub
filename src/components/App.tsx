import '../app.css'
import Header from './Header'
import Footer from './Footer'
import Intro from './Intro'
import Habitat from './Habitat'
import Videos from './Videos'
import Facts from './Facts'

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Facts />
        <Habitat />
        <Videos />
      </main>
      <Footer />
    </>
  )
}

export default App
