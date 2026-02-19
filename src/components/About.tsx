import { Box, Heading, Text, VStack, SimpleGrid, Link } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import { FaCode, FaGraduationCap, FaTrophy, FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa'

function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const journey = [
    {
      icon: <FaCode />,
      title: 'Competitive Programming',
      description: 'Won First Prize in VNU Olympiad, solving complex algorithmic challenges with precision and creativity',
      color: 'indigo',
    },
    {
      icon: <FaGraduationCap />,
      title: 'Academic Excellence',
      description: 'Maintained consistent 9+/10 overall GPA across all High School academic years and across subjects such as Informatics, Mathematics, and Physics',
      color: 'purple',
    },
    {
      icon: <FaLightbulb />,
      title: 'AI Innovation',
      description: 'Built Computer Vision and Machine Learning systems with high accuracy, from travel planning to traffic detection',
      color: 'pink',
    },
    {
      icon: <FaUsers />,
      title: 'Teaching & Mentoring',
      description: 'Led Code Camp for High School participants, taught C++ fundamentals, and helped students achieve their goals',
      color: 'blue',
    },
    {
      icon: <FaTrophy />,
      title: 'Achievements',
      description: 'Secured multiple competition wins, top 1% chess player, and gained recognition for research contributions',
      color: 'cyan',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Volunteering',
      description: 'Fundraised and supported the construction of primary and secondary schools to provide education opportunities for local children from disadvantaged backgrounds',
      color: 'green',
    }
  ]

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
        w="500px"
        h="500px"
        borderRadius="full"
        bgGradient="linear(135deg, #6366f1 0%, #8b5cf6 100%)"
        opacity={0.05}
        filter="blur(80px)"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="600px"
        h="600px"
        borderRadius="full"
        bgGradient="linear(135deg, #ec4899 0%, #f472b6 100%)"
        opacity={0.05}
        filter="blur(80px)"
      />

      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} position="relative" zIndex={1} maxW="1200px" mx="auto">
        <VStack align="stretch" gap={8}>
          {/* Header Section */}
          <VStack gap={4} mb={4}>
            <Box
              as="span"
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight={700}
              color="indigo.600"
              textTransform="uppercase"
              letterSpacing="wide"
              px={6}
              py={3}
              bg="indigo.50"
              borderRadius="full"
              boxShadow="md"
              border="2px solid"
              borderColor="indigo.100"
            >
              ✨ My Story
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
              Beyond the Code
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              maxW="800px"
              mx="auto"
              textAlign="center"
              lineHeight="tall"
            >
              A journey of continuous learning, innovation, and making an impact through technology and education
            </Text>
          </VStack>

          {/* Main Story Card */}
          <Box
            bgGradient="linear(135deg, #f8fafc 0%, #f1f5f9 100%)"
            p={{ base: 8, md: 12 }}
            borderRadius="3xl"
            boxShadow="xl"
            border="2px solid"
            borderColor="indigo.100"
            position="relative"
            overflow="hidden"
            _hover={{
              boxShadow: '2xl',
              borderColor: 'indigo.300',
            }}
            transition="all 0.3s"
          >
            {/* Decorative gradient top border */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              h="6px"
              bgGradient="linear(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)"
            />
            
            <VStack align="stretch" gap={6}>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                color="gray.800"
                lineHeight="tall"
                fontWeight={500}
                textAlign="center"
              >
                I'm a <Text as="span" fontWeight={700} color="indigo.600">Mathematics student</Text> at HUS High School for Gifted Students, 
                diving deep into <Text as="span" fontWeight={700} color="purple.600">Informatics</Text>, 
                <Text as="span" fontWeight={700} color="pink.600"> Mathematics</Text>, and 
                <Text as="span" fontWeight={700} color="cyan.600"> Machine Learning Applications</Text>. 
                My journey combines academic rigor with hands-on experience in building scalable systems and 
                exploring cutting-edge AI technologies.
              </Text>
              
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                lineHeight="tall"
                fontWeight={400}
                textAlign="center"
              >
                Beyond academics, I'm passionate about <Text as="span" fontWeight={600} color="indigo.600">tourism</Text> and <Text as="span" fontWeight={600} color="indigo.600">protecting the environment.</Text> When I'm not coding or studying, you'll also find me 
                strategizing on the <Text as="span" fontWeight={600} color="indigo.600">chessboard</Text> or competing in <Text as="span" fontWeight={600} color="indigo.600">table tennis</Text> tournaments.
              </Text>
            </VStack>
          </Box>

          {/* Journey Cards */}
          <Box>
            <Heading
              as="h3"
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight={700}
              color="gray.800"
              mb={6}
              textAlign="center"
            >
              My Journey
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
              {journey.map((item, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={6}
                  borderRadius="2xl"
                  boxShadow="lg"
                  border="2px solid"
                  borderColor="gray.100"
                  position="relative"
                  overflow="hidden"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: 'xl',
                    borderColor: `${item.color}.300`,
                  }}
                  transition="all 0.3s"
                >
                  {/* Icon */}
                  <Box
                    fontSize="3xl"
                    color={`${item.color}.600`}
                    mb={4}
                  >
                    {item.icon}
                  </Box>
                  
                  <Heading
                    as="h4"
                    fontSize="lg"
                    fontWeight={700}
                    color="gray.900"
                    mb={2}
                  >
                    {item.title}
                  </Heading>
                  
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    lineHeight="tall"
                  >
                    {item.title === 'Achievements' ? (
                      <>
                        Secured multiple competition wins, top 1% chess player on{' '}
                        <Link
                          href="https://www.chess.com/member/nchuong89"
                          target="_blank"
                          rel="noopener noreferrer"
                          color="indigo.600"
                          fontWeight={600}
                          _hover={{ textDecoration: 'underline' }}
                        >
                          Chess.com
                        </Link>
                        , and recognition for research contributions
                      </>
                    ) : (
                      item.description
                    )}
                  </Text>
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
