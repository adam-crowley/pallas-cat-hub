import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="footer">
        <p>
          Copy courtesy of <Link to="/facts">Guardian</Link>
        </p>
      </footer>
    </>
  )
}

export default Footer
