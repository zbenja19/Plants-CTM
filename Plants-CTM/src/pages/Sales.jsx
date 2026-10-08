import {Container,Row} from 'react-bootstrap';
import products from '../data/products';
import ProductCard from '../components/organisms/ProductCard';


export default function descuentos() {
    const ofertas =products
    .filter((p) => p.descuento > 0)
    .map((p) => ({
        ...p,
        precioOriginal: p.price,
        price: Math.round(p.price * (1 - p.descuento / 100)),
    }
));
  return (
    <Container className="my-5">
      <h1>Ofertas</h1>
      {ofertas.length === 0 && <p>No hay ofertas por ahora</p> }
      <Row>
        {ofertas.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
}
      