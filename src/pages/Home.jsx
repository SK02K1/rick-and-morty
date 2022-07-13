import { Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Heading>Home</Heading>
      <Button as={Link} to="/characters/1">
        Characters
      </Button>
    </div>
  );
};
