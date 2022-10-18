import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRef } from "react";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";

const Products: React.FunctionComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  // const toast = useToast()
  // const toastIdRef = useRef()
  const { data, error, isLoading } = useQuery(["products"], () => {
    return fetch(process.env.NEXT_PUBLIC_FAKE_STORE_API).then((res) =>
      res.json()
    );
  });
  if (isLoading)
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  // if(error) return   toastIdRef.current = toast({ description: 'some text' })
  return (
    <Box>
      <SimpleGrid columns={[1, 2, 2, 3]} spacing={10} my="10">
        {data.map(({ id, image, title, price, description }) => {
          return (
            <Box key={id} maxW="lg" border="1px solid #eee" rounded="md" p="3">
              <Image src={image} alt={title} width="300" height="300" />
              <Heading noOfLines={1} fontSize="xl" mt="2">
                {title}
              </Heading>
              <Text noOfLines={2} my="2">
                {description}
              </Text>
              <Text mb="2" fontSize="2xl" fontWeight="bold">
                ${price}
              </Text>
              <Button
                leftIcon={<AiFillStar />}
                colorScheme="messenger"
                w="full"
                ref={btnRef}
                onClick={onOpen}
              >
                Reveal
              </Button>
            </Box>
          );
        })}
      </SimpleGrid>

      {/* Drawer from bottom  */}
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Text>Product</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button
              leftIcon={<AiOutlinePlus />}
              colorScheme="messenger"
              w="full"
            >
              Add to Cart
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Products;
