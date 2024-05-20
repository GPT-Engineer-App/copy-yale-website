import { Container, Box, VStack, HStack, Text, Image, Button, IconButton, Input, InputGroup, InputRightElement, Link } from "@chakra-ui/react";
import { FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="blue.800" color="white" py={4}>
        <HStack justifyContent="space-between" px={8}>
          <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5YWxlJTIwbG9nb3xlbnwwfHx8fDE3MTYxNjkyMDl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Yale Logo" boxSize="50px" />
          <HStack spacing={4}>
            <Link href="#">About Yale</Link>
            <Link href="#">Admissions</Link>
            <Link href="#">Academics</Link>
            <Link href="#">Research</Link>
            <Link href="#">Campus Life</Link>
            <Link href="#">News</Link>
          </HStack>
          <InputGroup maxW="200px">
            <Input placeholder="Search" />
            <InputRightElement>
              <IconButton aria-label="Search" icon={<FaSearch />} size="sm" />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box position="relative" height="400px">
        <Image src="https://images.unsplash.com/photo-1605299670824-00515e81b924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5YWxlJTIwY2FtcHVzfGVufDB8fHx8MTcxNjE2OTIxMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Yale Campus" objectFit="cover" width="100%" height="100%" />
        <Box position="absolute" top="0" left="0" width="100%" height="100%" bg="blackAlpha.600" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="4xl" color="white" fontWeight="bold">
            Welcome to Yale University
          </Text>
        </Box>
      </Box>

      {/* Content Section */}
      <VStack spacing={8} py={8} px={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Explore Yale
        </Text>
        <HStack spacing={8}>
          <Box width="30%">
            <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5YWxlJTIwc3R1ZGVudHxlbnwwfHx8fDE3MTYxNjkyMTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Yale Student" borderRadius="md" />
            <Text mt={4}>Student Life</Text>
          </Box>
          <Box width="30%">
            <Image src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5YWxlJTIwcmVzZWFyY2h8ZW58MHx8fHwxNzE2MTY5MjE0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Yale Research" borderRadius="md" />
            <Text mt={4}>Research</Text>
          </Box>
          <Box width="30%">
            <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5YWxlJTIwY2FtcHVzJTIwbGlmZXxlbnwwfHx8fDE3MTYxNjkyMTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Yale Campus Life" borderRadius="md" />
            <Text mt={4}>Campus Life</Text>
          </Box>
        </HStack>
      </VStack>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4}>
        <HStack justifyContent="space-between" px={8}>
          <Text>&copy; 2023 Yale University</Text>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebookF />} />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} />
            <IconButton aria-label="YouTube" icon={<FaYoutube />} />
          </HStack>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;
