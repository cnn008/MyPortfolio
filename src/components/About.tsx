import { Box, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box
      id="about"
      minH="100vh"
      w="100%"
      position="relative"
      overflow="hidden"
      bg="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 16, md: 24 }}
      px={0}
    >
      {/* Decorative background elements */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="purple.50"
        opacity={0.3}
        filter="blur(60px)"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="blue.50"
        opacity={0.3}
        filter="blur(60px)"
      />

      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} position="relative" zIndex={1}>
        <VStack align="stretch" gap={6}>
          {/* Header Section */}
          <VStack gap={3} mb={2}>
            <Box
              as="span"
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight={700}
              color="purple.600"
              textTransform="uppercase"
              letterSpacing="wide"
              px={6}
              py={3}
              bg="white"
              borderRadius="full"
              boxShadow="md"
            >
              About Me
            </Box>
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight={800}
              textAlign="center"
              lineHeight="shorter"
              bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
              bgClip="text"
              letterSpacing="tight"
            >
              About Me
            </Heading>
          </VStack>

          {/* Content Section */}
          <Box
            w="100%"
          >
            <VStack gap={4} align="stretch">
              <Box
                bg="white"
                p={{ base: 6, md: 8 }}
                borderRadius="2xl"
                boxShadow="xl"
                border="1px solid"
                borderColor="blue.100"
                _hover={{
                  boxShadow: '2xl',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s"
              >
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.800"
                lineHeight="tall"
                textAlign="center"
                fontWeight={500}
              >
                I'm a passionate <Text as="span" fontWeight={700} color="purple.600">Data Engineer</Text> with a love for building reliable and efficient data pipelines. With a deep expertise in <Text as="span" fontWeight={700} color="blue.600">Big Data and Analytics</Text>, I enjoy transforming raw data into actionable insights, hence enabling organizations to make data-driven decisions.
              </Text>
              </Box>

              <Box
                bg="white"
                p={{ base: 6, md: 8 }}
                borderRadius="2xl"
                boxShadow="xl"
                border="1px solid"
                borderColor="purple.100"
                _hover={{
                  boxShadow: '2xl',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s"
              >
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.800"
                lineHeight="tall"
                textAlign="center"
                fontWeight={500}
              >
                When I'm not coding, you can find me doing <Text as="span" fontWeight={700} color="cyan.600">3 things simultaneously</Text>: pursuing higher studies, exploring new technologies and mentoring students on all things education-related and in various formats.
              </Text>
              </Box>
            </VStack>
          </Box>

          {/* Statistics Cards */}
          <SimpleGrid 
            columns={{ base: 1, md: 3 }} 
            gap={{ base: 6, md: 8 }} 
            mt={8}
            w="100%"
          >
            <Box
              bg="white"
              p={{ base: 8, md: 10 }}
              borderRadius="2xl"
              boxShadow="xl"
              textAlign="center"
              border="2px solid"
              borderColor="purple.200"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-8px) scale(1.02)',
                boxShadow: '2xl',
                borderColor: 'purple.400',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="4px"
                bgGradient="linear(90deg, #667eea 0%, #764ba2 100%)"
              />
              <Heading
                as="h3"
                fontSize={{ base: '5xl', md: '6xl' }}
                fontWeight={800}
                color="purple.600"
                mb={5}
              >
                4+
              </Heading>
              <Text fontSize="lg" fontWeight={600} color="gray.800" mb={1}>
                Years of Professional Data
              </Text>
              <Text fontSize="lg" fontWeight={600} color="gray.800">
                and Software Engineering
              </Text>
            </Box>

            <Box
              bg="white"
              p={{ base: 8, md: 10 }}
              borderRadius="2xl"
              boxShadow="xl"
              textAlign="center"
              border="2px solid"
              borderColor="blue.200"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-8px) scale(1.02)',
                boxShadow: '2xl',
                borderColor: 'blue.400',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="4px"
                bgGradient="linear(90deg, #2196F3 0%, #00BCD4 100%)"
              />
              <Heading
                as="h3"
                fontSize={{ base: '5xl', md: '6xl' }}
                fontWeight={800}
                color="blue.600"
                mb={5}
              >
                5+
              </Heading>
              <Text fontSize="lg" fontWeight={600} color="gray.800" mb={1}>
                Years of Teaching and
              </Text>
              <Text fontSize="lg" fontWeight={600} color="gray.800">
                Mentoring
              </Text>
            </Box>

            <Box
              bg="white"
              p={{ base: 8, md: 10 }}
              borderRadius="2xl"
              boxShadow="xl"
              textAlign="center"
              border="2px solid"
              borderColor="cyan.200"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-8px) scale(1.02)',
                boxShadow: '2xl',
                borderColor: 'cyan.400',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="4px"
                bgGradient="linear(90deg, #00BCD4 0%, #009688 100%)"
              />
              <Heading
                as="h3"
                fontSize={{ base: '5xl', md: '6xl' }}
                fontWeight={800}
                color="cyan.600"
                mb={5}
              >
                3+
              </Heading>
              <Text fontSize="lg" fontWeight={600} color="gray.800" mb={1}>
                Years of Creating and Sharing
              </Text>
              <Text fontSize="lg" fontWeight={600} color="gray.800">
                Educational Content
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Scroll Arrow */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="purple.600"
        _hover={{ color: 'purple.700', transform: 'translateX(-50%) translateY(4px)' }}
        cursor="pointer"
        onClick={() => scrollToSection('education')}
        transition="all 0.3s"
        zIndex={2}
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={32} />
      </Box>
    </Box>
  )
}

export default About

