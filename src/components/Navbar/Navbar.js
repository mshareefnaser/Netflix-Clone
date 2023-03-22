import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Navbar_ (){
return (
    <Navbar bg="danger" variant="dark">
    <Container>
      <Navbar.Brand href="/">Netfilx</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/favorites'>Favorites</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

)
}
export default Navbar_;