import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import image from "../image/pazar.png"
import image1 from "../image/account.png"
import image2 from "../image/checkout.png"
import {Col , Row} from 'react-bootstrap';

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg">
            <Col sm={4}>
                <Navbar.Brand href="#"><img src={image} width="200"
              height="70"
              className="d-inline-block align-top"
              alt="gambar"/></Navbar.Brand>
            </Col>
            <Col sm={6}>
            <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            </Col>
            <Col sm={2} className="d-flex flex-row-reverse justify-content-around">
                <img src={image1}
                width="50"

                />
                <img src={image2}
                width="50"
                />
            </Col>
      
    </Navbar>
  );
}

export default NavScrollExample;