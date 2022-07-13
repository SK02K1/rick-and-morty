import { Heading, Button, Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <VStack spacing={8} py={4}>
      <Heading>Home</Heading>
      <Image
        boxSize="300px"
        objectFit="cover"
        src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
      />
      <Button as={Link} to="/characters/1">
        Characters
      </Button>
    </VStack>
  );
};
