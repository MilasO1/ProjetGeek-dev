import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

const ArticleGrid = () => {
  return (
    <Container className="pb-5 px-lg-5 mx-auto">
      <h2 className="text-muted text-center mt-4 mb-3">Articles récents</h2>
      <Row className="g-4">
        <Col xs={12} sm={6} md={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://placehold.co/300"
              alt="{article.title}"
              style={{ objectFit: "cover", height: "200px" }}
            />
            <Card.Body>
              <Card.Title>"article.title"</Card.Title>
              <Card.Text className="text-muted">"article.excerpt"</Card.Text>
              <a href="{article.link}" className="btn btn-primary">
                En plus
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleGrid;
