import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';


function ProductCard({ product }) {
 const navigate = useNavigate();


 return (
   <Card style={{ width: '18rem' }} className="m-2">
     <Image src={product.image} alt={product.name} className="card-img-top" />
     <Card.Body>
       <CardBody
         title={product.name}
         description={product.description}
         price={product.price}
       />
       <Button variant="primary" onClick={() => navigate(`/products/${product.id}`)}>
         Ver detalles
       </Button>
     </Card.Body>
   </Card>
 );
}


export default ProductCard;
