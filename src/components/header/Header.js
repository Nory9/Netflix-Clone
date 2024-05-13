import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
function Header(){
    return(
        <>
         <Navbar fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movies</Navbar.Brand>
          <Nav className="me-auto link">
            <Link  className="l" to ="/home">Home</Link>
            <Link  className="l" to ="/favList">FavList</Link>
            {/* <Nav.Link to="/home">Home</Nav.Link> */}
            {/* <Nav.Link href="/">Fav List</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    
        </>
    );
}
export default Header;