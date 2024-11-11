import { Card } from "react-bootstrap";

const CardPractice = () => {
  return (
    <>
      <Card className="img-fluid w-25 h-25">
        <Card.Body>
          <Card.Title className="fs-5">random image for card</Card.Title>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
          className="img-fluid"
        />
      </Card>
      <Card className="img-fluid w-25 h-25 text-white">
        <Card.Img
          variant="bottom"
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
          className="img-fluid"
        />
        <Card.ImgOverlay>
          <Card.Title className="fs-5">random image for card</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default CardPractice;
