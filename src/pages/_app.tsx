import Layout from "@/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import { theme } from "@/theme/index";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient();

  return (
    <ShoppingCartProvider>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ChakraProvider>
    </ShoppingCartProvider>
  );
}

export default MyApp;
