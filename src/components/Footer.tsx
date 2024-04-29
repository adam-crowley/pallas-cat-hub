import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="footer">
        <p>
          Copy courtesy of{' '}
          <Link to="https://www.wired.com/2014/08/pallas-cat-facts/">
            Wired magazine
          </Link>
        </p>
      </footer>
    </>
  )
}

export default Footer
