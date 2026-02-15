import { Box, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Hobbies() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const hobbies = [
    {
      name: 'Chess',
      icon: '♟️',
      achievement: 'Achieved top 1% Worldwide at Chess.com',
      color: 'indigo',
    },
    {
      name: 'Table Tennis',
      icon: '🏓',
      achievement: 'Won second prize in the Men\'s Doubles section at the 2025 HUS Table Tennis Cup',
      color: 'pink',
    },
  ]

  return (
    <Box
      id="hobbies"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="white"
      py={{ base: 16, md: 24 }}
      px={0}
      position="relative"
    >
      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} maxW="1200px" mx="auto">
        <VStack gap={3} mb={12} textAlign="center">
          <Box
            as="span"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight={700}
            color="indigo.600"
            textTransform="uppercase"
            letterSpacing="wide"
            px={6}
            py={3}
            bg="gray.50"
            borderRadius="full"
            boxShadow="md"
            border="2px solid"
            borderColor="indigo.100"
          >
            🎯 Hobbies
          </Box>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} maxW="800px" mx="auto">
          {hobbies.map((hobby, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="2xl"
              p={8}
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              border="2px solid"
              borderColor="gray.100"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 40px rgba(99, 102, 241, 0.2)',
                borderColor: 'indigo.300',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              {/* Decorative gradient top border */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="4px"
                bgGradient="linear(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)"
              />

              <VStack align="stretch" gap={4}>
                {/* Icon and Name */}
                <VStack gap={3}>
                  <Box
                    fontSize="6xl"
                    lineHeight={1}
                  >
                    {hobby.icon}
                  </Box>
                  <Heading
                    as="h3"
                    fontSize="2xl"
                    color="gray.900"
                    fontWeight={800}
                  >
                    {hobby.name}
                  </Heading>
                </VStack>

                {/* Achievement */}
                <Box
                  pt={4}
                  borderTop="1px solid"
                  borderColor="gray.200"
                >
                  <Text
                    color="gray.700"
                    lineHeight="tall"
                    fontSize="md"
                    fontWeight={500}
                    textAlign="center"
                  >
                    {hobby.achievement}
                  </Text>
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Scroll Arrow */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="indigo.600"
          _hover={{ color: 'indigo.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => scrollToSection('contact')}
          transition="all 0.3s"
          zIndex={2}
          display={{ base: 'none', md: 'block' }}
        >
          <HiArrowDown size={32} />
        </Box>
      </Box>
    </Box>
  )
}

export default Hobbies
