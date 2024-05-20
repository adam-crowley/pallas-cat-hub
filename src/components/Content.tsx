import { useOutletContext } from 'react-router-dom'

import Intro from './Intro'
import Habitat from './Habitat'
import Videos from './Videos'
import Facts from './Facts'

import { RefsType } from '../../models/models'

function Content() {
  const { introRef, factsRef, habitatRef, videosRef } =
    useOutletContext<RefsType>()

  return (
    <>
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
    </>
  )
}

export default Content
