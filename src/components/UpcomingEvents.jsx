import { Row, Col, Card, Badge } from 'react-bootstrap'

const events = [
  { name: 'LCL 01 - Risen', location: 'Colombo, Sugathadasa', date: '2026-01-15' },
  { name: 'LCL 02 - Reckoning', location: 'Kandy, Indoor Stadium', date: '2026-04-02' },
  { name: 'LCL 03 - Dominance', location: 'Galle, National Stadium', date: '2026-07-18' },
  { name: 'LCL 04 - Bloodline', location: 'Jaffna, Arena', date: '2026-10-10' },
]

export default function UpcomingEvents() {
  return (
    <section className="container mt-5">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="mt-5 h4 fw-bold mb-0">Upcoming Events</h2>
        <p className="mt-5 text-white mb-0">Stay tuned for the next fight nights</p>
      </div>

      <Row xs={1} sm={2} lg={3} className="g-4">
        {events.map((e) => (
          <Col key={e.name}>
            <Card bg="dark" text="light" className="h-100 border-lcl-red">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <Card.Title className="mb-1">{e.name}</Card.Title>
                    <Card.Text className="text-muted small mb-0">{e.location}</Card.Text>
                  </div>
                  <div className="text-end">
                    <div className="text-danger fw-bold small">{e.date}</div>
                  </div>
                </div>

                <div className="mt-3">
                  <Badge bg="secondary" className="me-2">Main Card</Badge>
                  <Badge bg="danger">Live</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}
