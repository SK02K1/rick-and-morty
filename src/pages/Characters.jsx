import {
  Button,
  Container,
  Grid,
  HStack,
  VStack,
  Heading,
  Spinner,
  Text
} from "@chakra-ui/react";
import { useEffect } from "react";

import { Link, useLocation, useParams } from "react-router-dom";
import { InfoCard } from "../components/InfoCard";
import { useFetch } from "../hooks";

export const Characters = () => {
  const { pageId } = useParams();
  const { data, isPending, error } = useFetch(pageId);
  const location = useLocation();

  const charactersListing = data?.characters.map((info) => {
    return <InfoCard key={info.id} info={info} />;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Container className="App" maxW="container.2xl" scrollBehavior="smooth">
      <HStack justifyContent="space-between" py={4}>
        <Button as={Link} to="/">
          Back to home
        </Button>
        <Heading>R&M</Heading>
      </HStack>
      <VStack spacing={8} py={4}>
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)"
          }}
          gap={4}
          w="full"
        >
          {data?.characters && charactersListing}
        </Grid>
        {isPending && <Spinner />}
        {error && <Text>{error.message}</Text>}
        {data?.info && (
          <HStack justifyContent="center">
            <Button
              as={Link}
              to={`/characters/${Number(pageId) - 1}`}
              disabled={!data.info.prev}
            >
              Previous
            </Button>
            <Button
              as={Link}
              to={`/characters/${Number(pageId) + 1}`}
              disabled={!data.info.next}
            >
              Next
            </Button>
          </HStack>
        )}
      </VStack>
    </Container>
  );
};
