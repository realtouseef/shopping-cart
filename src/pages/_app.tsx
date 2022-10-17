import Layout from "@/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
