import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(true)

  function handleClick() {
    setIsNavExpanded(!isNavExpanded)
  }

  useEffect(() => {
    function handleResize() {
      const breakpoint = 768
      const isMobile = window.innerWidth <= breakpoint
      setIsNavExpanded(isMobile)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo">
          <img src="/img/logo.png" alt="" />
        </Link>
        <h1 className="header__title">
          <Link to="/">Pallas' Cat Hub</Link>
        </h1>
        <ul
          className={`header__nav ${
            !isNavExpanded ? 'header__nav--open' : 'header__nav--closed'
          }`}
        >
          <li>
            <Link to="/facts">Facts</Link>
          </li>
          <li>
            <Link to="/habitat">Habitat</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
        </ul>
        <button className="header__nav-btn" onClick={handleClick}>
          {isNavExpanded ? (
            <>
              <svg className="header__menu--open"></svg>
            </>
          ) : (
            <>
              <svg className="header__menu--close"></svg>
            </>
          )}
        </button>
      </header>
    </>
  )
}

export default Header
