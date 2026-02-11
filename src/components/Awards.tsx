import { Box, Heading, Text, SimpleGrid, Badge, Image, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import saLogo from '../assets/sa.png'
import nusLogo from '../assets/nus.svg'

function Awards() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const awards = [
    {
      title: 'ASEAN Secondary Scholarship',
      organization: 'Saint Andrew\'s Junior College',
      year: '2014 - 2018',
      description: 'Full-ride scholarship for 4 years of secondary and junior college education',
      logo: saLogo,
      icon: '⭐',
    },
    {
      title: 'ASEAN Undergraduate Scholarship',
      organization: 'National University of Singapore',
      year: '2018 - 2022',
      description: 'Full-ride scholarship for 4 years of undergraduate study',
      logo: nusLogo,
      icon: '🎓',
    },
    {
      title: '1st prize winning team | Healthcare track | AIxImpact Case Competition',
      organization: 'QuantumBlack, a McKinsey company',
      year: '2022',
      description: 'Best Project award within the Healthcare track of AIxImpact Case Competition',
      logo: nusLogo,
      icon: '⭐',
    }
  ]

  return (
    <Box
      id="awards"
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
            Awards & Achievements
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
            Awards & Achievements
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {awards.map((award, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="2xl"
                p={8}
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                border="1px solid"
                borderColor="gray.100"
                textAlign="center"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
                  borderColor: 'purple.200',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Box
                  w="90px"
                  h="90px"
                  borderRadius="full"
                  bg="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={6}
                  boxShadow="0 8px 24px rgba(102, 126, 234, 0.3)"
                  border="3px solid"
                  borderColor="purple.100"
                  p={3}
                  position="relative"
                  overflow="hidden"
                >
                  <Image
                    src={award.logo}
                    alt={`${award.organization} logo`}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                  />
                </Box>
                <Heading as="h3" fontSize="lg" mb={3} color="gray.900" fontWeight={700}>
                  {award.title}
                </Heading>
                <Text fontSize="md" color="purple.700" fontWeight={600} mb={3}>
                  {award.organization}
                </Text>
                <Badge
                  bgGradient="linear(135deg, #667eea, #764ba2)"
                  color="blue"
                  backgroundColor="gray.100"
                  mb={4}
                  px={4}
                  py={1.5}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight={600}
                >
                  {award.year}
                </Badge>
                <Text color="gray.800" lineHeight="tall" fontSize="sm" fontWeight={500}>
                  {award.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {/* Scroll Arrow */}
          <Box
            position="absolute"
            bottom={8}
            left="50%"
            transform="translateX(-50%)"
            color="purple.600"
            _hover={{ color: 'purple.700', transform: 'translateX(-50%) translateY(4px)' }}
            cursor="pointer"
            onClick={() => scrollToSection('projects')}
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

export default Awards

