import { Container, Button } from 'react-bootstrap'

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh' }} className="d-flex align-items-center position-relative text-center">
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(ellipse at center, rgba(201,29,29,0.06), transparent 30%), linear-gradient(#000, rgba(0,0,0,0.8))', zIndex: 0 }} />

      <Container className="position-relative text-center text-white" style={{ zIndex: 1 }}>
        <h1 className="display-3 fw-bold text-uppercase">LION COMBAT LEAGUE</h1>
        <p className="lead text-white">Sri Lanka’s Ultimate Fight Promotion</p>

        <div className="mt-4">
          <Button href="/events" variant="danger" size="lg" className="bg-lcl-red border-0 px-4 py-2">COMING SOON!</Button>
        </div>
      </Container>
    </section>
  )
}
