import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { HeaderProps } from '../../models/models'

function Header({ scrollToSection, refs }: HeaderProps) {
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
        <Link
          to="/"
          onClick={() => scrollToSection(refs.introRef)}
          className="header__logo"
        >
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
            <Link to="/facts" onClick={() => scrollToSection(refs.factsRef)}>
              Facts
            </Link>
          </li>
          <li>
            <Link
              to="/habitat"
              onClick={() => scrollToSection(refs.habitatRef)}
            >
              Habitat
            </Link>
          </li>
          <li>
            <Link to="/videos" onClick={() => scrollToSection(refs.videosRef)}>
              Videos
            </Link>
          </li>
          <li>
            <Link to="/database">Database</Link>
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
