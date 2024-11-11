import { useState } from "react";
import { Alert, Button, Stack, Form, FloatingLabel } from "react-bootstrap";

const FormPractice = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Button variant="primary" as="a" href="https://www.youtube.com">
          Button 1
        </Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="success">Button 3</Button>
      </Stack>

      <Alert show={show} dismissible variant="danger">
        <Alert.Heading>you got a error;</Alert.Heading>
        <p>changge it </p>
        <Button onClick={() => setShow(false)}>click me</Button>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>Shoe aAlert</Button>}

      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="enter your email address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>enter your message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Control type="text" placeholder="disabled  input" readOnly />

        <Form.Group controlId="formName">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Form.Control plaintext readOnly defaultValue="raj" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>enter your file </Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>

        <Form.Group controlId="formColor">
          <Form.Label>Color PIcker</Form.Label>
          <Form.Control type="color" defaultValue="red" title="Choose color " />
          <Form.Text id="ChooseColor" muted>
            choose color
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formCountry">
          <Form.Label>Country</Form.Label>
          <Form.Select aria-label="select an option">
            <option value=""> choose..</option>
            <option value="india">India</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formMultipleCheck">
          <Form.Label>Choose subjects that you like:</Form.Label>
          <br />
          <Form.Check
            type="checkbox"
            label="math"
            id="inline-checkbox-1"
            name="group1"
            inline
          />
          <Form.Check
            type="checkbox"
            label="physics"
            id="inline-checkbox-2"
            name="group1"
            inline
          />
          <Form.Check
            type="checkbox"
            label="Chemistry"
            id="inline-checkbox-3"
            name="group1"
            inline
          />
        </Form.Group>

        <Form.Group controlId="FormFood">
          <Form.Label>Food options:</Form.Label>
          <br />
          <Form.Check type="radio" label="vegetarian" name="foodoption" />
          <Form.Check type="radio" label="Non-vegetarian" name="foodoption" />
        </Form.Group>

        <Form.Group controlId="formRange">
          <Form.Label>Choose a value </Form.Label>
          <Form.Range min="0" max="100" defaultValue="50" />
        </Form.Group>

        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="password" />
        </FloatingLabel>
      </Form>
    </>
  );
};

export default FormPractice;
