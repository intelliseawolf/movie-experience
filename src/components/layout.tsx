import { ReactNode } from "react";
import {
  Flex,
  Box,
  Container,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Container maxW="container.xl">
          <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
            <Text fontSize="4xl" as="b">
              Stonks
            </Text>
          </Flex>
        </Container>
      </Box>
      <main>
        <Container maxW="container.xl" pt={4}>
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;
