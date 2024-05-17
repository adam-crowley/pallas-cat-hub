import { useOutletContext } from 'react-router-dom'

import Intro from './Intro'
import Habitat from './Habitat'
import Videos from './Videos'
import Facts from './Facts'

// interface ContentProps {
//   refs: {
//     introRef: React.RefObject<HTMLElement>
//     factsRef: React.RefObject<HTMLElement>
//     habitatRef: React.RefObject<HTMLElement>
//     videosRef: React.RefObject<HTMLElement>
//   }
// }

function Content({ introRef, factsRef, habitatRef, videosRef }) {
  // const { introRef, factsRef, habitatRef, videosRef }: ContentProps = useOutletContext()

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
