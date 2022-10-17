import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaBolt, FaShoppingCart } from "react-icons/fa";

const Header: React.FunctionComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerRef = useRef();

  return (
    <>
      <Box as="nav" py="6" bg="gray.100" fontSize="3xl">
        <Container maxW="6xl">
          <Flex alignItems="center" justifyContent="space-between">
            <FaBolt />
            <Flex fontSize="4xl" alignItems="center" justifyContent="center">
              <Button ref={drawerRef} onClick={onOpen}>
                <FaShoppingCart fontSize="26px" />
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={drawerRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt="2" />
          <DrawerHeader>Total Cart Items</DrawerHeader>
          <DrawerBody>
            <Text>Product goes here</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
