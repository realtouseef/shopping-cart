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
import { AiOutlinePlus } from "react-icons/ai";
import CartItemInDrawer from "../CartItemInDrawer";

const DrawerComponent = ({ isOpen, placement, onClose, drawerHeader }) => {
  const { cartItems } = useShoppingCart();
  const btnRef = useRef();

  return (
    <Drawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      finalFocusRef={btnRef}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton mt="2" />
        <DrawerHeader>{drawerHeader}</DrawerHeader>

        <DrawerBody>
          <Box>
            {cartItems.map((item) => (
              <CartItemInDrawer {...item} key={item.id} />
            ))}
          </Box>
        </DrawerBody>

        <DrawerFooter>
          <Button leftIcon={<AiOutlinePlus />} colorScheme="messenger" w="full">
            Add to Cart
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
