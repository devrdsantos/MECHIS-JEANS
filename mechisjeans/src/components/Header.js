import React from "react";
import { Button , Container , Form , Nav , Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faCartShopping , faUser , faHeart } from '@fortawesome/free-solid-svg-icons';
import BarraSuperior from "./BarraSuperiorHeader";
import '../styles/header.css';
import Logo from '../assets/logoloanaheader.png';
import SearchHeaderForm from './SearchHeaderForm';


function Header() {
    return (
			<header className="mb-3 header-bg-color">
        <BarraSuperior/>
				<div className="">
				<Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <img src={ Logo } alt="logo del header" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <div className="container-fluid second-header-border">
					<div className=" d-flex justify-content-between">
						<Nav
						activeKey="/home"
						onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
							<Nav.Item className="ms-5 text-size mt-1 ">
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
				</div>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll >
          </Nav>
          <SearchHeaderForm/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
				</div>
			</header>
    );
}

export default Header;