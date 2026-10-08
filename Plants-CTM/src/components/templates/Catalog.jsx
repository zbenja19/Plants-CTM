import { Container, Row, Col } from 'react-bootstrap';

function Catalog({ title, search, filters, children }) {
  return (
    <Container className="my-5">
      <h1>{title}</h1>
      {search}
      <Row>
        <Col md={3}>{filters}</Col>
        <Col md={9}>
          <Row>{children}</Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Catalog;