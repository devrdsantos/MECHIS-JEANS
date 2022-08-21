import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Form, Nav } from "react-bootstrap";

const SearchHeaderForm = () => {
  return (
    <div className="d-flex gap-3 col-4">
      <InputGroup className="">
        <Form.Control
          placeholder="Buscar"
          aria-label="Barra de busqueda"
          aria-describedby="basic-addon2"
        />
        <Button
          className="border border-start-0"
          variant="outline-secondary"
          id="button-addon2"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </InputGroup>
      <Nav className="justify-content-end" activeKey="/home">
        <Button className="me-1 border-none" variant="outline-secondary">
          <FontAwesomeIcon icon={faUserCircle} className="fa-xl" />
        </Button>
        <Button className="me-1 border-none" variant="outline-secondary">
          <FontAwesomeIcon icon={faBagShopping} className="fa-xl" />
        </Button>
      </Nav>
    </div>
  );
};
export default SearchHeaderForm;
