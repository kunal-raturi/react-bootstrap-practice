import { Accordion } from "react-bootstrap";

const AccordionPractice = () => {
  return (
    <Accordion flush>
      {/* defaultActiveKey="eventkey number"  is passed to keep that accordion open by default  in top most parent accordion tag ,if you dont want anyone to keep open then simply dont pass it   */}
      <Accordion.Item eventKey="0">
        <Accordion.Header>how are you doing?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>what would you like to have ?</Accordion.Header>
        <Accordion.Body>
          lorem30Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui offic
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionPractice;
