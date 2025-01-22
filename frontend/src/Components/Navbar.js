import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRightToBracket,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <header className=" sticky-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        data-bs-theme="dark"
      >
        <Container className="py-1">
          <Navbar.Brand href="/">GeekShop</Navbar.Brand>

          <Button
            variant="outline-light"
            as={Link}
            to={"/cart"}
            aria-label="Ouvrir le panier"
            className="my-auto py-2 order-lg-1 ms-auto"
          >
            <FontAwesomeIcon icon={faCartShopping} className="me-2" />
            Mon panier
          </Button>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/shop"} className="nav-link">
                Shop
              </Link>
              <NavDropdown title="Catégories" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown
                title={<FontAwesomeIcon icon={faUser} />}
                id="auth-menu-dropdown"
                className="fs-5"
                align={"end"}
                aria-label="Ouvrir un menu déroulant pour l'authentification de l'utilisateur"
              >
                <NavDropdown.Item as={Link} to="/login">
                  <FontAwesomeIcon icon={faRightToBracket} className="me-2" />
                  Se Connecter
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/register">
                  <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                  Créer un compte
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
