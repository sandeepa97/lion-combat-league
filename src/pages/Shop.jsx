import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'

const products = [
  {
    id: 1,
    name: 'LCL Fight T-Shirt',
    price: 'Rs. 4,500',
    category: 'Apparel',
    image: 'https://image.made-in-china.com/202f0j00tofcLIYSaVkv/Summer-New-Male-Sports-and-Leisure-Light-Plate-No-Logo-Button-Short-Sleeve-T-Shirt.webp'
  },
  {
    id: 2,
    name: 'LCL Boxing Gloves',
    price: 'Rs. 12,000',
    category: 'Gear',
    image: 'https://thumbs.dreamstime.com/b/handsome-boxer-boxing-man-wearing-gloves-over-black-background-62491035.jpg'
  },
  {
    id: 3,
    name: 'LCL Hoodie',
    price: 'Rs. 7,500',
    category: 'Apparel',
    image: 'https://thumbs.dreamstime.com/b/female-boxer-prepares-to-punch-boxing-studio-woman-boxer-motion-female-boxer-pink-hoodie-prepares-to-punch-boxing-194615548.jpg'
  },
  {
    id: 4,
    name: 'LCL Cap',
    price: 'Rs. 2,000',
    category: 'Accessories',
    image: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2025/07/25/8ac7a456-320c-4cbd-a79b-f2805cf19f76_78bef175.jpg?itok=alcqphOc&v=1753423889'
  },
  {
    id: 5,
    name: 'LCL Fighting Shorts',
    price: 'Rs. 3,000',
    category: 'Accessories',
    image: 'https://cdn.shopify.com/s/files/1/0840/4913/3860/files/02._Fairtex_Volcano_Shorts.jpg?v=1762339815'
  }
]

export default function Shop() {
  return (
    <Container fluid className="bg-dark text-white py-5">
      <Container>
        <h1 className="mt-4 mb-4 fw-bold">LCL Shop</h1>
        <p className="text-secondary mb-5">
          Official Lion Combat League merchandise
        </p>

        <Row>
          {products.map(product => (
            <Col md={3} sm={6} xs={12} key={product.id} className="mb-4">
              <Card bg="dark" text="white" className="h-100 border-danger">
                <Card.Img variant="top" src={product.image} className="shop-product-img" alt={product.name} loading="lazy" />
                <Card.Body className="d-flex flex-column">
                  <Badge bg="danger" className="align-self-start mb-2">
                    {product.category}
                  </Badge>

                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-danger fw-bold">
                    {product.price}
                  </Card.Text>

                  <Button variant="danger" className="mt-auto">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}
