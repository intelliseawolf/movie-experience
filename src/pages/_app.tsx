import { ReactElement, ReactNode, ComponentType } from "react";
import { ChakraProvider } from "@chakra-ui/react";

interface MyAppProps {
  Component: ComponentType<any>;
  pageProps: Record<string, unknown>;
}

function MyApp({ Component, pageProps }: MyAppProps): ReactElement {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
