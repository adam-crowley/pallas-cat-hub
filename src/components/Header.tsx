import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className="header">
        <h1>Pallas Cat Hub</h1>
        <ul>
          <li>
            <Link to="/">Facts</Link>
          </li>
          <li>
            <Link to="/">Habitat</Link>
          </li>
          <li>
            <Link to="/">Videos</Link>
          </li>
          <li>
            <Link to="/">Gallery</Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
