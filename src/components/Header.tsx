import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo">
          <img src="/img/logo.png" alt="" />
        </Link>
        <h1 className="header__title">
          <Link to="/">Pallas' Cat Hub</Link>
        </h1>
        <ul className="header__nav">
          <li>
            <Link to="/facts">Facts</Link>
          </li>
          <li>
            <Link to="/habitat">Habitat</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
