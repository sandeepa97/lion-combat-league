import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          LCL
        </Link>

        <div>
          <Link className="nav-link d-inline text-white me-3" to="/about">
            About
          </Link>
          <Link className="nav-link d-inline text-white me-3" to="/disciplines">
            Disciplines
          </Link>
          <Link className="nav-link d-inline text-white" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
