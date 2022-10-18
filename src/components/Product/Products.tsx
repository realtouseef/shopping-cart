import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import SingleProduct from "./SingleProduct";

const Products: React.FunctionComponent = () => {
  // const toast = useToast()
  // const toastIdRef = useRef()
  const { data, isLoading } = useQuery(["products"], () => {
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

  // take the id of the clicked product
  // and map it over inside the drawer and print the product
  // move the bottom drawer to a component

  return (
    <Box mt="32">
      <SimpleGrid columns={[1, 2, 2, 3]} spacing={10} my="10">
        {data.map(({ id, image, title, price, description }) => {
          return (
            <SingleProduct
              id={id}
              image={image}
              title={title}
              description={description}
              price={price}
            />
          );
        })}
      </SimpleGrid>

      {/* Drawer from bottom  */}
    </Box>
  );
};

export default Products;
