import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { Box, Heading, Text, Button, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import DrawerComponent from "../Drawer";

const SingleProduct = ({ id, image, title, description, price }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef();

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
        Reveal Product
      </Button>

      {/* Drawer*/}
      <DrawerComponent
        isOpen={isOpen}
        placement={"bottom"}
        onClose={onClose}
        drawerHeader="Product #"
      />
    </Box>
  );
};

export default SingleProduct;
