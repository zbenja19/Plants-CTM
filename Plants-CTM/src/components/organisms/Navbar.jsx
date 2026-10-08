import { Navbar, Nav, Container } from 'react-bootstrap';


function NavBar() {
 return (
   <Navbar bg="dark" variant="dark" expand="lg">
     <Container>
       <Navbar.Brand href="/">Plants-CTM</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link href="/">Inicio</Nav.Link>
           <Nav.Link href="/products">Productos</Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
 );
}


export default NavBar;
