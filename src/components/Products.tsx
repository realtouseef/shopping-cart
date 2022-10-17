import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const Products: React.FunctionComponent = () => {
  // const toast = useToast()
  // const toastIdRef = useRef()
  const { data, error, isLoading } = useQuery(["products"], () => {
    return fetch(process.env.NEXT_PUBLIC_FAKE_STORE_API).then((res) =>
      res.json()
    );
  });
  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  // if(error) return   toastIdRef.current = toast({ description: 'some text' })
  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} my="10">
        {data.map(({ id, image, title, price, description }) => {
          return (
            <Box key={id} maxW="xs">
              <Image src={image} alt={title} width="300" height="300" />
              <Heading noOfLines={1} fontSize="xl">
                {title}
              </Heading>
              <Text noOfLines={2}>{description}</Text>
              <Text fontWeight="bold">${price}</Text>
              <Button leftIcon={<FaPlus />} colorScheme="messenger" w="full">
                Add to Cart
              </Button>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
