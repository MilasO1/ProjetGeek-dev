import Button from "react-bootstrap/Button";
import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Separator = () => {
  return (
    <>
      <Container fluid className="d-flex flex-column py-4">
        <p className="text-center px-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Container className="d-flex justify-content-center">
          <Button as={Link} to="/shop" variant="dark">
            Tous les produits
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default Separator;
