import { Breadcrumb } from "react-bootstrap";

const BreadcrumbPractice = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.youtube.com">
          Youtube
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.google.com">google </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbPractice;
