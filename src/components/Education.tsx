import { Box, Heading, Text, Flex, VStack, HStack, Image } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import utLogo from '../assets/ut.png'
import nusLogo from '../assets/nus.svg'
import saLogo from '../assets/sa.png'

function Education() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const education = [
    {
      degree: 'Master\'s of Science in Computer Science',
      institution: 'The University of Texas at Austin',
      period: '2024 - 2026',
      specialization: 'Computer Science',
      logo: utLogo,
      description: [
        'Relevant coursework: Deep Learning, Deep Generative Models, Machine Learning, Advanced Linear Algebra',
      ],
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'National University of Singapore',
      period: '2018 - 2022',
      specialization: 'Database Management Systems and Artificial Intelligence',
      logo: nusLogo,
      description: [
        'Graduated with honours',
        'Full-ride ASEAN Undergraduate Scholarship for 4 years of study',
        'Relevant coursework: Database Application Tuning, Big Data Systems for Data Science, Design and Analysis of Algorithms, Machine Learning',
      ],
    },
    {
      degree: 'Secondary School and Junior College Diploma',
      institution: 'Saint Andrew\'s Junior College',
      period: '2014 - 2018',
      specialization: 'GCE O-levels and A-levels',
      logo: saLogo,
      description: [
        'Full-ride ASEAN Secondary Scholarship for 4 years of study',
        'Recipient of the Jacob Ballas Awards for Outstanding Performance in GCE A-Level Examination (Straight A\'s across 6 subjects)',
      ],
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
            color="purple.600"
            textTransform="uppercase"
            letterSpacing="wide"
            px={6}
            py={3}
            bg="white"
            borderRadius="full"
            boxShadow="md"
          >
            Education
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
            Education
          </Heading>
        </VStack>
        <VStack align="stretch" gap={8}>
          {education.map((edu, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="2xl"
              p={{ base: 6, md: 10 }}
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor="gray.100"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
                borderColor: 'purple.200',
                borderLeftColor: 'purple.600',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Flex gap={6} align="flex-start">
                <Box
                  w="70px"
                  h="70px"
                  borderRadius="full"
                  bg="white"
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                  boxShadow="0 4px 15px rgba(139, 92, 246, 0.3)"
                  border="2px solid"
                  borderColor="purple.100"
                  p={2}
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
                <VStack align="stretch" flex={1} gap={4}>
                  <Box>
                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={2} color="gray.900" fontWeight={700}>
                      {edu.degree}
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'lg' }} color="purple.700" fontWeight={600}>
                      {edu.institution}
                    </Text>
                  </Box>
                  <Box
                    bg="gray.50"
                    p={4}
                    borderRadius="md"
                  >
                    <VStack align="stretch" gap={3}>
                      {edu.specialization && (
                        <HStack>
                          <Text fontWeight={600} color="purple.700" minW="120px" flexShrink={0}>
                            Specialization:
                          </Text>
                          <Text color="gray.800" fontWeight={500}>{edu.specialization}</Text>
                        </HStack>
                      )}
                      <HStack>
                        <Text fontWeight={600} color="purple.700" minW="120px" flexShrink={0}>
                          Period:
                        </Text>
                        <Text color="gray.800" fontWeight={500}>{edu.period}</Text>
                      </HStack>
                    </VStack>
                  </Box>
                  {edu.description && edu.description.length > 0 && (
                    <Box pt={4} borderTop="1px solid" borderColor="gray.200">
                      <VStack align="stretch" gap={2}>
                        {edu.description.map((item, i) => (
                          <Box key={i} color="gray.800" pl={6} position="relative" fontWeight={500}>
                            <Box
                              as="span"
                              position="absolute"
                              left={0}
                              color="purple.600"
                              fontWeight="bold"
                            >
                              ✓
                            </Box>
                            {item}
                          </Box>
                        ))}
                      </VStack>
                    </Box>
                  )}
                </VStack>
              </Flex>
            </Box>
          ))}
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
        onClick={() => scrollToSection('experience')}
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
