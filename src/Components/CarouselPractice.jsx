import { Carousel } from "react-bootstrap";

const CarouselPractice = () => {
  return (
    <Carousel className="w-100" style={{ height: "50vh", overflow: "hidden" }}>
      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
          alt="1st slide"
          className="d-block w-100"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>1st Slide</h3>
          <p>This is the 1st slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
          alt="2nd slide"
          className="d-block w-100"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>2nd Slide</h3>
          <p>This is the 2nd slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
          alt="3rd slide"
          className="d-block w-100"
          style={{ height: "100%", objectFit: "contain" }}
        />
        <Carousel.Caption>
          <h3>3rd Slide</h3>
          <p>This is the 3rd slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselPractice;
