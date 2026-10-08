import Text from '../atoms/Text';
import PriceTag from '../atoms/PriceTag';


function CardBody({ title, description, price, OriginalPrice}) {
 return (
   <>
     <Text variant="h5">{title}</Text>
     <Text variant="p">{description}</Text>
     <Text variant="span" className="text-muted">
     <PriceTag price={price} OriginalPrice={OriginalPrice} />
    
     </Text>
   </>
 );
}


export default CardBody;
