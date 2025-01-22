import Carousel from "react-bootstrap/Carousel";

function CarouselComp() {
  return (
    <Carousel data-bs-theme="dark" interval={null}>
      <Carousel.Item style={{ maxHeight: "500px" }}>
        <img
          className="d-block w-100 h-100"
          src="https://placehold.co/300"
          alt="nEME diapo"
          style={{ objectFit: "cover", maxHeight: "500px", width: "100%" }}
        />
        <Carousel.Caption>
          <h5>TITLE DE L'ANNONCE</h5>
          <p>DESCRIPTION DE L'ANNONCE</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
