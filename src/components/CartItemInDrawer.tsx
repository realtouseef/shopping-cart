import { CartItemsProps } from "@/context/ShoppingCartContext";
import { Box, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const CartItemInDrawer = ({ id, quantity }: CartItemsProps) => {
  // const { data, isLoading } = useQuery(["products"], () => {
  //   return fetch(process.env.NEXT_PUBLIC_FAKE_STORE_API).then((res) =>
  //     res.json()
  //   );
  // });
  // const product = data.find((i) => i.id === id);
  // if (product === null) return null;
  // if (isLoading) return <Text>Loading.</Text>;
  return (
    <>
      <Box>
        <Text>placeholder</Text>
      </Box>
    </>
  );
};

export default CartItemInDrawer;
