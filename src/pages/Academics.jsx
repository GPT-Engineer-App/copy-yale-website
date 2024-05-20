import { Container, Box, VStack, HStack, Text, Image, Link } from "@chakra-ui/react";

const Academics = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {}
      <Box bg="blue.800" color="white" py={4}>
        <HStack justifyContent="space-between" px={8}>
          <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5YWxlJTIwbG9nb3xlbnwwfHx8fDE3MTYxNjkyMDl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Yale Logo" boxSize="50px" />
          <HStack spacing={4}>
            <Link href="/">Home</Link>
            <Link href="/academics">Academics</Link>
          </HStack>
        </HStack>
      </Box>

      {}
      <VStack spacing={8} py={8} px={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Undergraduate Study
        </Text>
        <Text>Yale offers a range of undergraduate programs that allow students to explore their academic interests and develop their intellectual skills. Our programs are designed to provide a comprehensive education that prepares students for a variety of careers and advanced studies.</Text>
        <Image src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5YWxlJTIwcmVzZWFyY2h8ZW58MHx8fHwxNzE2MTY5MjE0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Yale Academics" borderRadius="md" />
      </VStack>

      {}
      <Box bg="gray.800" color="white" py={4}>
        <HStack justifyContent="space-between" px={8}>
          <Text>&copy; 2023 Yale University</Text>
        </HStack>
      </Box>
    </Container>
  );
};

export default Academics;
