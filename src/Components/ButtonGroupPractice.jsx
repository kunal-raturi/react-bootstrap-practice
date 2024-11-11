import { Button, ButtonGroup } from "react-bootstrap";

const ButtonGroupPractice = () => {
  return (
    <>
      <ButtonGroup>
        <Button variant="primary">1</Button>
        <Button variant="primary">2</Button>
        <Button variant="primary">3</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup vertical>
        <Button variant="secondary">1</Button>
        <Button variant="secondary">2</Button>
        <Button variant="secondary">3</Button>
      </ButtonGroup>
    </>
  );
};

export default ButtonGroupPractice;

// In React-Bootstrap, ButtonGroup is used to group a series of buttons together to create a unified, cohesive set. It ensures that the buttons are aligned properly and can function together in a logical way, such as grouping related actions or options. The ButtonGroup component provides a container for the buttons and can help manage their layout, especially when you need to handle multiple buttons that should appear together in a single row or column.
// Key Points:
// Alignment: The ButtonGroup helps in controlling the alignment of buttons, ensuring they appear next to each other without any gap.
// Button Variants: You can apply different variants (like primary, secondary, success, etc.) to individual buttons inside the group.
// Optional Vertical Layout: If you want the buttons to stack vertically, you can use the vertical prop on the ButtonGroup.
