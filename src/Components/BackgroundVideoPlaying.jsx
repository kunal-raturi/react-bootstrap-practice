import { Button, Col, Container, Row } from "react-bootstrap";

const BackgroundVideoPlaying = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="px-0">
          <div
            className="d-flex justify-content-center align-items-center flex-column w-100"
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              height: "100vh",
              boxSizing: "border-box",
              position: "relative",
              aspectRatio: "16/9",
              overflow: "hidden",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                right: "0px",
                bottom: "0px",
                objectFit: "cover",
                zIndex: "-1",
              }}
              className="w-100 h-100"
            >
              <source src="/asset/vid.mp4" type="video/mp4" />
            </video>

            <div
              className="text-white fw-bold  mb-3"
              style={{ fontSize: "3rem", cursor: "pointer" }}
            >
              Explore More
            </div>
            <Button variant="outline-primary" className="rounded-pill p-2 ">
              start learning
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BackgroundVideoPlaying;
