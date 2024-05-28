import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { HeaderProps } from '../../models/models'

function Header({ scrollToSection, refs }: HeaderProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const breakpoint = 768
  let isMobile = window.innerWidth <= breakpoint

  function toggleNav() {
    isMobile ? setIsExpanded(!isExpanded) : setIsExpanded(false)
  }

  function closeNav() {
    isMobile ? setIsExpanded(true) : null
  }

  function handleResize() {
    isMobile = window.innerWidth <= breakpoint
    setIsExpanded(isMobile)
  }

  useEffect(() => {
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
          onClick={() => {
            closeNav()
            scrollToSection(refs.introRef)
          }}
          className="header__logo"
        >
          <img src="/img/logo.png" alt="" />
        </Link>
        <h1 className="header__title">
          <Link
            to="/"
            onClick={() => {
              closeNav()
              scrollToSection(refs.introRef)
            }}
          >
            Pallas' Cat Hub
          </Link>
        </h1>
        <ul
          className={`header__nav ${
            !isExpanded ? 'header__nav--open' : 'header__nav--closed'
          }`}
        >
          <li>
            <Link
              to="/facts"
              onClick={() => {
                scrollToSection(refs.factsRef)
                toggleNav()
              }}
            >
              Facts
            </Link>
          </li>
          <li>
            <Link
              to="/habitat"
              onClick={() => {
                scrollToSection(refs.habitatRef)
                toggleNav()
              }}
            >
              Habitat
            </Link>
          </li>
          <li>
            <Link
              to="/videos"
              onClick={() => {
                scrollToSection(refs.videosRef)
                toggleNav()
              }}
            >
              Videos
            </Link>
          </li>
          <li>
            <Link to="/database/japan" onClick={toggleNav}>
              Database
            </Link>
          </li>
        </ul>
        <button className="header__nav-btn" onClick={toggleNav}>
          {isExpanded ? (
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
