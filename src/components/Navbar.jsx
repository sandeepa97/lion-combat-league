import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function LCLNavbar() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="py-3" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <div className="fw-bold fs-5">LCL</div>
          <small className="text-muted">Lion Combat League</small>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="lcl-navbar" />
        <Navbar.Collapse id="lcl-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/fighters">Fighters</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
