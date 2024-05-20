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
import Database from './components/Database'
import Content from './components/Content'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Content />}>
          <Route path="intro" element={<Intro />} />
          <Route path="facts" element={<Facts />} />
          <Route path="habitat" element={<Habitat />} />
          <Route path="videos" element={<Videos />} />
        </Route>
        <Route path="database" element={<Database />} />
      </Route>
    </>
  )
)

export default router
