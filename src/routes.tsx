import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Intro from './components/Intro'
import Facts from './components/Facts'
import Habitat from './components/Habitat'
import Videos from './components/Videos'
import Gallery from './components/gallery'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Intro />} />
        <Route path="facts" element={<Facts />} />
        <Route path="habitat" element={<Habitat />} />
        <Route path="videos" element={<Videos />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </>
  )
)

export default router
