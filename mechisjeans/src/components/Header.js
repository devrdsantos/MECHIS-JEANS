import React from "react";
import { Button , Container , Form , Nav , Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faCartShopping , faUser , faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css'

function Header() {
    return (
			<header className="mb-3 header-bg-color">
				<div className="">
				<Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">IMG LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
			<FontAwesomeIcon icon={faMagnifyingGlass} />
			</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
				</div>
                <div className="container-fluid second-header-border">
					<div className=" d-flex justify-content-between">
						<Nav
						activeKey="/home"
						onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
						>
							<Nav.Item className="ms-5 text-size mt-1 ">
								<Nav.Link className="ps-3 font-weight-bold" href="/home">Jeans</Nav.Link>
							</Nav.Item>
							<Nav.Item className="ps-5 mt-1">
								<Nav.Link className="ps-5 font-weight-bold" eventKey="link-1">Shorts</Nav.Link>
							</Nav.Item>
							<Nav.Item className="ps-5 mt-1">
								<Nav.Link className="ps-5 font-weight-bold" eventKey="link-2">Camperas</Nav.Link>
							</Nav.Item>
							<Nav.Item className="ps-5 mt-1">
								<Nav.Link className="ps-5 font-weight-bold" eventKey="Link-3">Ofertas</Nav.Link>
							</Nav.Item>
						</Nav>
						<Nav className="justify-content-end" activeKey="/home">                           
                            <Button className="me-3 border-none" variant="outline-secondary">
                            <FontAwesomeIcon icon={faUser} />
                            </Button>
                            <Button className="me-3 border-none" variant="outline-secondary">
                            <FontAwesomeIcon icon={faHeart} />
                            </Button>
                            <Button className="me-3 border-none" variant="outline-secondary">
                            <FontAwesomeIcon icon={faCartShopping} />
                            </Button>
							
							
						</Nav>


					</div>					
				</div>
				
			</header>
    );
}

export default Header;