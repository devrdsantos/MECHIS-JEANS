import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import BarraSuperior from "./BarraSuperiorHeader";
import "../styles/header.css";
import Logo from "../assets/logoloanaheader.png";
import SearchHeaderForm from "./SearchHeaderForm";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mb-3 header-bg-color">
      <BarraSuperior />
      <div className="">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              {" "}
              <img src={Logo} alt="logo del header" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div className="container-fluid second-header-border">
                <div className=" d-flex justify-content-between">
                  <Nav activeKey="/home">
                    <Nav.Item className="ms-5 text-size mt-1 ">
                      <Nav.Link
                        as={Link}
                        to="/jeans"
                        className="ps-3 font-weight-bold"
                      >
                        JEANS
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ps-5 mt-1">
                      <Nav.Link
                        as={Link}
                        className="ps-5 font-weight-bold"
                        Link
                        to="/shorts"
                      >
                        SHORTS
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ps-5 mt-1">
                      <Nav.Link
                        as={Link}
                        className="ps-5 font-weight-bold"
                        to="/camperas"
                      >
                        CAMPERAS
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ps-5 mt-1">
                      <Nav.Link
                        as={Link}
                        className="ps-5 font-weight-bold"
                        to="/ofertas"
                      >
                        OFERTAS
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <SearchHeaderForm />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
