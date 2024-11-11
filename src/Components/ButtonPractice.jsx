import { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";

const ButtonPractice = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Button variant="danger">click me </Button>
        <Button variant="outline-primary">dont click me </Button>
        <Button disabled={isLoading} onClick={() => setIsLoading(true)}>
          {isLoading ? "loading.." : "click me"}
        </Button>
      </Stack>
    </>
  );
};

export default ButtonPractice;
