import { ReactElement, ReactNode, ComponentType } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "@/components/layout";

interface MyAppProps {
  Component: ComponentType<any>;
  pageProps: Record<string, unknown>;
}

function MyApp({ Component, pageProps }: MyAppProps): ReactElement {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
