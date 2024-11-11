import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const AlertPractice = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>you got a error</Alert.Heading>
        <p>change it </p>
        <Button onClick={() => setShow(false)}>close alert</Button>
      </Alert>
      {!show && (
        <Button onClick={() => setShow(true)}>click me to show alert </Button>
      )}
    </>
  );
};

export default AlertPractice;
