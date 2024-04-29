import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src="/img/logo.png" alt="" />
        <p className="header__title">Pallas' Cat Hub</p>
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
