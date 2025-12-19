import { Row, Col, Card } from 'react-bootstrap'

const fighters = [
  { name: 'Arjuna Perera', weight: 'Welterweight', record: '10-2-0' },
  { name: 'Samadhi Silva', weight: 'Lightweight', record: '12-1-0' },
  { name: 'Niroshan Jayasuriya', weight: 'Heavyweight', record: '8-0-0' },
  { name: 'Kamal Ratnayake', weight: 'Featherweight', record: '9-3-0' },
]

function Avatar({ name }) {
  const initials = name.split(' ').map((n) => n[0]).slice(0, 2).join('')
  return (
    <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: 56, height: 56 }}>
      {initials}
    </div>
  )
}

export default function FightersPreview() {
  return (
    <section className="container mt-5">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="h4 fw-bold mb-0 mt-5">Fighters</h2>
        <p className="text-white mb-0 mt-5">Rising stars & veterans</p>
      </div>

      <Row xs={2} sm={3} lg={4} className="g-4">
        {fighters.map((f) => (
          <Col key={f.name}>
            <Card bg="dark" text="light" className="h-100 border-0">
              <Card.Body className="d-flex align-items-center gap-3">
                <Avatar name={f.name} />
                <div>
                  <Card.Title className="mb-0 small fw-bold">{f.name}</Card.Title>
                  <div className="small text-muted">{f.weight}</div>
                  <div className="small mt-1">Record: <span className="text-danger fw-bold">{f.record}</span></div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}
