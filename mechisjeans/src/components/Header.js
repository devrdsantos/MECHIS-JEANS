import React from "react";
import { Button , Container , Form , Nav , Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faCartShopping , faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css'
import Logo from '../assets/logorosa1.png'

function Header() {
    return (         
	<header className="mb-3 header-bg-color">
        <div className="flex div-header-especifico-prueba">
            <p>3 cuotas sin interés con todas las tarjetas de crédito | Envio gratis a todo el país a partir de $40.000</p>
        </div>
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"> <img src={ Logo } alt="logo del header" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll >
                    </Nav> 
                <div className=" d-flex justify-content-center">
                    <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item className=" text-size mt-1 ">
                            <Nav.Link className="ps-3 font-weight-bold" href="/home">JEANS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="ps-5 mt-1">
                            <Nav.Link className="ps-5 font-weight-bold" eventKey="link-1">SHORTS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="ps-5 mt-1">
                            <Nav.Link className="ps-5 font-weight-bold" eventKey="link-2">CAMPERAS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="ps-5 mt-1">
                            <Nav.Link className="ps-5 font-weight-bold" eventKey="Link-3">OFERTAS</Nav.Link>
                        </Nav.Item>
                    </Nav>										
                </div>
                <div className= "d-flex ms-auto">
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
                    <Nav className="justify-content-end" activeKey="/home">                           
                        <Button className="me-3 border-none" variant="outline-secondary">
                        <FontAwesomeIcon icon={faUser} />
                        </Button>
                        <Button className="me-3 border-none" variant="outline-secondary">
                        <FontAwesomeIcon icon={faCartShopping} />
                        </Button>														
                    </Nav>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
    );
}

export default Header;