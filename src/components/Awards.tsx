import { Box, Heading, Text, SimpleGrid, Badge, VStack, Flex } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Awards() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const awards = [
    {
      title: 'First Prize in Informatics',
      organization: 'Vietnam National University Olympiad',
      year: '2024 - 2025',
      prize: 'First Prize',
      description: 'Competed in an intensive 3-hour individual programming contest. Achieved a score of 13/20 by solving 4 competitive programming problems. Ranked 4th overall out of 200+ participating students.',
      icon: '🥇',
    },
    {
      title: 'Third Prize (Division C1)',
      organization: 'National Youth Informatics Contest',
      year: '2025',
      prize: 'Third Prize',
      description: 'Competed in the national-level knockout contest for Informatics-specialized students. Collaborated in a two-member team during a 5-hour intensive optimization contest, designing algorithms and strategies for head-to-head interactive matches; advanced to the Quarter-finals.',
      icon: '🥉',
    },
    {
      title: 'Second Prize in Informatics',
      organization: 'VNU Competition for Gifted Students',
      year: '2024',
      prize: 'Second Prize',
      description: 'Competed in a rigorous 4-day programming marathon comprising 20 algorithmic problems. Demonstrated consistent performance across multiple contest sessions. Ranked 13th overall out of 70 selected participants.',
      icon: '🥈',
    },
    {
      title: 'First Prize - Informatics Specialization',
      organization: '5th Central Highlands Olympiad by Vietnam Association for Information Processing',
      year: '04/2024',
      prize: 'First Prize',
      description: 'Secured rank 15 out of 160+ contestants in the Specialized Division. Scored 180/300 points across 3 competitive programming problems within 3 hours.',
      icon: '🥇',
    },
    {
      title: 'Bronze Medal',
      organization: 'HSGS Olympiad in Informatics',
      year: '05/2024',
      prize: 'Bronze Medal',
      description: 'Competed against 300+ top students from specialized high schools nationwide in a standard IOI-style format (2 days, 10 hours). Solved 6 advanced algorithmic problems to secure the Bronze Medal.',
      icon: '🥉',
    },
    {
      title: 'Third Prize - Exploration and Creativity Contest in Mathematics',
      organization: 'VNU – Hanoi University of Science',
      year: '2024',
      prize: 'Third Prize',
      description: 'Co-authored in an in-depth research project on "Inequalities in Triangles", investigating advanced geometric proofs and applications. Recognized for research quality, which resulted in a book publication by Vietnam National University Press.',
      icon: '🥉',
    },
    {
      title: 'First Prize - Tech for Green Challenge',
      organization: 'Tech for Green Challenge',
      year: '2025',
      prize: 'First Prize',
      description: 'Developed computational models to evaluate green technologies and optimize sustainability performance.',
      icon: '🥇',
    },
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
            🏆 Awards & Achievements
          </Box>
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight={800}
            textAlign="center"
            lineHeight="shorter"
            bgGradient="linear(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)"
            bgClip="text"
            letterSpacing="tight"
          >
            Awards & Achievements
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
            {awards.map((award, index) => {
              const getPrizeColor = (prize: string) => {
                if (prize.includes('First') || prize.includes('Gold')) {
                  return { bg: 'yellow.50', color: 'yellow.700', border: 'yellow.200', badge: 'yellow.100' }
                } else if (prize.includes('Second') || prize.includes('Silver')) {
                  return { bg: 'gray.50', color: 'gray.700', border: 'gray.200', badge: 'gray.100' }
                } else if (prize.includes('Third') || prize.includes('Bronze')) {
                  return { bg: 'orange.50', color: 'orange.700', border: 'orange.200', badge: 'orange.100' }
                }
                return { bg: 'indigo.50', color: 'indigo.700', border: 'indigo.200', badge: 'indigo.100' }
              }
              const prizeColors = getPrizeColor(award.prize)
              
              return (
              <Box
                key={index}
                bg="white"
                borderRadius="2xl"
                p={6}
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
                  {/* Header with icon and prize badge */}
                  <Flex align="flex-start" justify="space-between" gap={4}>
                    <Box
                      fontSize="4xl"
                      lineHeight={1}
                    >
                      {award.icon}
                    </Box>
                    <Badge
                      bg={prizeColors.badge}
                      color={prizeColors.color}
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight={700}
                      border="1px solid"
                      borderColor={prizeColors.border}
                    >
                      {award.prize}
                    </Badge>
                  </Flex>
                  
                  {/* Title */}
                  <Heading as="h3" fontSize="lg" color="gray.900" fontWeight={700} lineHeight="shorter">
                    {award.title}
                  </Heading>
                  
                  {/* Organization */}
                  <Text fontSize="sm" color="indigo.700" fontWeight={600}>
                    {award.organization}
                  </Text>
                  
                  {/* Year badge */}
                  <Badge
                    bg="indigo.100"
                    color="indigo.800"
                    border="1px solid"
                    borderColor="indigo.200"
                    w="fit-content"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight={600}
                    boxShadow="0 2px 8px rgba(99, 102, 241, 0.2)"
                  >
                    {award.year}
                  </Badge>
                  
                  {/* Description */}
                  <Text color="gray.700" lineHeight="tall" fontSize="sm" fontWeight={400} pt={2}>
                    {award.description}
                  </Text>
                </VStack>
              </Box>
            )})}
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

