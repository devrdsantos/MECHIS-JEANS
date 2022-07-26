import React from "react";
import { Button , Container , Form , Nav , Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
			<header>
				<div className="">
				<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
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
				<div className="container-fluid">
					<div className=" d-flex justify-content-between">
						<Nav
						activeKey="/home"
						onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
						>
							<Nav.Item>
								<Nav.Link href="/home">Jeans</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-1">Shorts</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-2">Camperas</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="Link-3">Ofertas</Nav.Link>
							</Nav.Item>
						</Nav>
						<Nav className="justify-content-end" activeKey="/home">
							<Nav.Item>
							<Nav.Link href="/home">Active</Nav.Link>
							</Nav.Item>
							<Nav.Item>
							<Nav.Link eventKey="link-1">Link</Nav.Link>
							</Nav.Item>
							<Nav.Item>
							<Nav.Link eventKey="link-2">Link</Nav.Link>
							</Nav.Item>
							<Nav.Item>
							<Nav.Link eventKey="disabled" disabled>
								Disabled
							</Nav.Link>
							</Nav.Item>
						</Nav>


					</div>					
				</div>
			</header>
    );
}

export default Header;