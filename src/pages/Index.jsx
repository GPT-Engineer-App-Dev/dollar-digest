import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" py={8} px={8} bg="gray.100">
        <Heading as="h2" size="2xl" mb={4}>Main Headline: Breaking News</Heading>
        <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
      </Box>

      {/* Additional Articles Grid */}
      <Box as="section" py={8} px={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Box bg="white" p={4} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md" mb={2}>Article 1</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box bg="white" p={4} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md" mb={2}>Article 2</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box bg="white" p={4} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md" mb={2}>Article 3</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" px={8}>
          <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>About Us</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;