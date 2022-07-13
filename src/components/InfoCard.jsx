import { Heading, Box, HStack, Image, VStack, Text } from "@chakra-ui/react";

const statusDictionary = {
  Alive: "green.500",
  Dead: "red.500",
  unknown: "gray.500"
};

export const InfoCard = ({ info }) => {
  const { name, status, species, gender, image } = info;
  return (
    <HStack
      alignItems="flex-start"
      bg={"gray.900"}
      color="white"
      borderRadius="md"
      overflow="hidden"
    >
      <Image
        boxSize="50%"
        objectFit="cover"
        w="40%"
        h="16rem"
        src={image}
        alt={name}
      />
      <VStack alignItems="flex-start" p={4}>
        <Heading>{name}</Heading>
        <HStack mt={4}>
          <Box
            borderRadius="full"
            bg={statusDictionary[status]}
            w={5}
            h={5}
          ></Box>
          <Text fontWeight={500}>
            {status} - {species}
          </Text>
        </HStack>
        <Text>{gender}</Text>
      </VStack>
    </HStack>
  );
};
