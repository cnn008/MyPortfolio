import { Box, Heading, Text, Flex, VStack, SimpleGrid, Image, Badge } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import husLogo from '../assets/hus_logo.png'

function Education() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const education = [
    {
      degree: 'High School for Gifted Students',
      institution: 'HUS High School for Gifted Students - Vietnam National University, Hanoi',
      period: '09/2023 - Present',
      specialization: 'Specialized Class in Mathematics',
      logo: husLogo,
      description: [
        'GPA: 9.4/10 (Grade 10), 9.6/10 (Grade 11), 9.8/10 (Semester 1, Grade 12)',
      ],
    },
  ]

  const certifications = [
    {
      name: 'SAT',
      score: '1530',
      organization: 'College Board',
      date: '2024',
      description: 'Total Score: 1530/1600',
    },
    {
      name: 'IELTS',
      score: '7.5',
      organization: 'IDP',
      date: '2024',
      description: 'Overall Band Score: 7.5',
    },
  ]

  return (
    <Box
      id="education"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
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
            bg="white"
            borderRadius="full"
            boxShadow="md"
            border="2px solid"
            borderColor="indigo.100"
          >
            🎓 Academic Journey
          </Box>
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight={800}
            textAlign="center"
            lineHeight="shorter"
            color="gray.800"
            letterSpacing="tight"
          >
            Education
          </Heading>
        </VStack>
        <VStack gap={8} maxW="1200px" mx="auto">
          {/* Main Education */}
          <Box w="100%">
            {education.map((edu, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="3xl"
              p={{ base: 8, md: 12 }}
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
              border="2px solid"
              borderColor="indigo.100"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 16px 48px rgba(99, 102, 241, 0.2)',
                borderColor: 'indigo.300',
              }}
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              {/* Decorative gradient background */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="6px"
                bgGradient="linear(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)"
              />
              
              <VStack align="stretch" gap={6}>
                {/* Header Section */}
                <Flex 
                  direction={{ base: 'column', md: 'row' }} 
                  gap={6} 
                  align={{ base: 'center', md: 'flex-start' }}
                >
                  {/* Logo */}
                  <Box
                    w={{ base: '100px', md: '120px' }}
                    h={{ base: '100px', md: '120px' }}
                    borderRadius="2xl"
                    bg="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    boxShadow="0 8px 24px rgba(99, 102, 241, 0.2)"
                    border="3px solid"
                    borderColor="indigo.100"
                    p={3}
                    overflow="hidden"
                  >
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      w="100%"
                      h="100%"
                      objectFit="contain"
                    />
                  </Box>
                  
                  {/* Title and Institution */}
                  <VStack align={{ base: 'center', md: 'flex-start' }} flex={1} gap={3}>
                    <Heading 
                      as="h3" 
                      fontSize={{ base: '2xl', md: '3xl' }} 
                      color="gray.900" 
                      fontWeight={800}
                      textAlign={{ base: 'center', md: 'left' }}
                    >
                      {edu.degree}
                    </Heading>
                    <Text 
                      fontSize={{ base: 'lg', md: 'xl' }} 
                      color="indigo.700" 
                      fontWeight={700}
                      textAlign={{ base: 'center', md: 'left' }}
                    >
                      {edu.institution}
                    </Text>
                  </VStack>
                </Flex>

                {/* Details Section */}
                <Box
                  bgGradient="linear(135deg, #f7fafc 0%, #edf2f7 100%)"
                  p={6}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                    {edu.specialization && (
                      <Box>
                        <Text 
                          fontWeight={700} 
                          color="indigo.600" 
                          fontSize="sm"
                          textTransform="uppercase"
                          letterSpacing="wide"
                          mb={2}
                        >
                          Specialization
                        </Text>
                        <Text color="gray.800" fontWeight={600} fontSize="lg">
                          {edu.specialization}
                        </Text>
                      </Box>
                    )}
                    <Box>
                      <Text 
                        fontWeight={700} 
                        color="indigo.600" 
                        fontSize="sm"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        mb={2}
                      >
                        Period
                      </Text>
                      <Text color="gray.800" fontWeight={600} fontSize="lg">
                        {edu.period}
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>

                {/* Description Section */}
                {edu.description && edu.description.length > 0 && (
                  <Box 
                    pt={6} 
                    borderTop="2px solid" 
                    borderColor="gray.200"
                  >
                    <VStack align="stretch" gap={3}>
                      {edu.description.map((item, i) => (
                        <Flex 
                          key={i} 
                          align="center" 
                          gap={3}
                          color="gray.800" 
                          fontWeight={500}
                          fontSize="md"
                        >
                          <Box
                            w="24px"
                            h="24px"
                            borderRadius="full"
                            bgGradient="linear(135deg, #6366f1 0%, #8b5cf6 100%)"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexShrink={0}
                            color="white"
                            fontWeight="bold"
                            fontSize="sm"
                          >
                            ✓
                          </Box>
                          <Text>{item}</Text>
                        </Flex>
                      ))}
                    </VStack>
                  </Box>
                )}
              </VStack>
            </Box>
          ))}
          </Box>

          {/* Certifications Section */}
          <Box w="100%">
            <Heading
              as="h3"
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight={700}
              color="gray.800"
              mb={6}
              textAlign="center"
            >
              Certifications & Test Scores
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              {certifications.map((cert, index) => (
                <Box
                  key={index}
                  bg="white"
                  borderRadius="2xl"
                  p={{ base: 6, md: 8 }}
                  boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                  border="2px solid"
                  borderColor="indigo.100"
                  position="relative"
                  overflow="hidden"
                  _hover={{
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 40px rgba(99, 102, 241, 0.2)',
                    borderColor: 'indigo.300',
                  }}
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  {/* Decorative gradient background */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="4px"
                    bgGradient="linear(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)"
                  />
                  
                  <VStack align="stretch" gap={4}>
                    <Flex justify="space-between" align="flex-start" gap={4}>
                      <VStack align="flex-start" gap={1} flex={1}>
                        <Heading
                          as="h4"
                          fontSize={{ base: 'xl', md: '2xl' }}
                          fontWeight={800}
                          color="gray.900"
                        >
                          {cert.name}
                        </Heading>
                        <Text
                          fontSize="sm"
                          color="indigo.600"
                          fontWeight={600}
                        >
                          {cert.organization}
                        </Text>
                      </VStack>
                      <Box
                        bg={cert.name === 'IELTS' ? 'blue.100' : 'indigo.100'}
                        color={cert.name === 'IELTS' ? 'blue.700' : 'indigo.700'}
                        px={5}
                        py={2}
                        borderRadius="xl"
                        fontWeight={800}
                        fontSize={{ base: 'lg', md: 'xl' }}
                        boxShadow="0 4px 16px rgba(0, 0, 0, 0.1)"
                        minW={{ base: '80px', md: '100px' }}
                        textAlign="center"
                        border="2px solid"
                        borderColor={cert.name === 'IELTS' ? 'blue.300' : 'indigo.300'}
                      >
                        {cert.score}
                      </Box>
                    </Flex>
                    
                    <Box
                      pt={4}
                      borderTop="1px solid"
                      borderColor="gray.200"
                    >
                      <Flex justify="space-between" align="center">
                        <Text
                          fontSize="sm"
                          color="gray.600"
                          fontWeight={500}
                        >
                          {cert.description}
                        </Text>
                        <Badge
                          bg="indigo.50"
                          color="indigo.700"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                          fontWeight={700}
                        >
                          {cert.date}
                        </Badge>
                      </Flex>
                    </Box>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Box>

      {/* Scroll Arrow */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="indigo.600"
        _hover={{ color: 'indigo.700', transform: 'translateX(-50%) translateY(4px)' }}
        cursor="pointer"
        onClick={() => scrollToSection('awards')}
        transition="all 0.3s"
        zIndex={2}
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={32} />
      </Box>
    </Box>
  )
}

export default Education
