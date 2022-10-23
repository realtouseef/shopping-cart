import { useShoppingCart } from "@/context/ShoppingCartContext";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useRef } from "react";
import CartItemInDrawer from "../CartItemInDrawer";

const DrawerComponent = ({
  isOpen,
  onClose,
  drawerHeader,
  drawerFooter,
  drawerIcon,
}) => {
  const { cartItems } = useShoppingCart();
  const btnRef = useRef();

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent w="30em" mx="auto" roundedLeft="lg">
        <DrawerCloseButton mt="2" />
        <DrawerHeader>{drawerHeader}</DrawerHeader>

        <DrawerBody>
          <Box>
            {cartItems?.map((item) => (
              <CartItemInDrawer {...item} key={item.id} />
            ))}
          </Box>
        </DrawerBody>

        <DrawerFooter>
          <Button w="full" leftIcon={drawerIcon} colorScheme="red">
            {drawerFooter}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
