import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, Button, Flex, VStack, Link, Image, HStack, Badge } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import profileImage from '../assets/profile.png'
import resumePdf from '../assets/resume.pdf?url'

function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const roles = [
    'Informatics Student',
    'AI Enthusiast',
    'Competitive Programmer',
    'Problem Solver',
    'Tech Educator',
  ]

  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const current = roles[currentRole]

    if (!isDeleting && displayText === current) {
      setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
    } else {
      const timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        )
      }, typeSpeed)
      return () => clearTimeout(timeout)
    }
  }, [displayText, isDeleting, currentRole, roles])

  const personalityTraits = [
    { icon: '🧠', text: 'Analytical Thinker' },
    { icon: '🚀', text: 'Innovation-Driven' },
    { icon: '🎯', text: 'Goal-Oriented' },
    { icon: '💡', text: 'Creative Problem Solver' },
    { icon: '🤝', text: 'Collaborative' },
  ]

  return (
    <Box
      id="home"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      pt={{ base: "80px", md: "88px" }}
      pb={20}
      css={{
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #06b6d4 75%, #6366f1 100%)',
        backgroundSize: '300% 300%',
        animation: 'gradientShift 20s ease infinite',
      }}
    >
      {/* Animated grid pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.1}
        css={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Floating code symbols */}
      {['< />', '{ }', '[ ]', '( )'].map((symbol, i) => (
        <Box
          key={i}
          position="absolute"
          fontSize={{ base: '2xl', md: '4xl' }}
          color="gray.800"
          opacity={0.1}
          fontWeight={800}
          top={`${15 + i * 20}%`}
          left={`${10 + i * 15}%`}
          css={{
            animation: `float ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {symbol}
        </Box>
      ))}

      {/* Large animated background orbs */}
      <Box
        position="absolute"
        top="-30%"
        right="-30%"
        w="800px"
        h="800px"
        borderRadius="full"
        bgGradient="linear(135deg, #818cf8 0%, #a5b4fc 100%)"
        opacity={0.15}
        css={{
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />
      <Box
        position="absolute"
        bottom="-25%"
        left="-25%"
        w="700px"
        h="700px"
        borderRadius="full"
        bgGradient="linear(135deg, #6366f1 0%, #818cf8 100%)"
        opacity={0.15}
        css={{
          animation: 'pulse 10s ease-in-out infinite',
        }}
      />

      <Container maxW="1280px" position="relative" zIndex={10} px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          gap={{ base: 8, lg: 12 }}
        >
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            textAlign={{ base: 'center', lg: 'left' }}
            gap={6}
            flex={1}
          >
            {/* Greeting Badge */}
            <Box
              px={4}
              py={2}
              borderRadius="full"
              bg="rgba(255, 255, 255, 0.2)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.3)"
              css={{
                animation: 'fadeIn 1s ease-out',
              }}
            >
              <HStack gap={2}>
                <Text fontSize="sm" color="gray.800" fontWeight={600}>
                  👋 Welcome to my world
                </Text>
              </HStack>
            </Box>

            {/* Main Heading */}
            <Box css={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
              <Heading
                as="h1"
                fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
                fontWeight={900}
                color="gray.800"
                mb={4}
                lineHeight="shorter"
                textShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
                letterSpacing="tight"
              >
                Nguyen Nguyen Chuong
              </Heading>
              
              {/* Animated Role Text */}
              <Box h={{ base: '60px', md: '80px' }} mb={4}>
                <Heading
                  as="h2"
                  fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                  fontWeight={700}
                  color="cyan.200"
                  minH="1.2em"
                >
                  {displayText}
                  <Box as="span" color="gray.800" css={{ animation: 'blink 1s infinite' }}>
                    |
                  </Box>
                </Heading>
              </Box>
            </Box>

            {/* Personality Traits */}
            <Flex
              gap={3}
              flexWrap="wrap"
              justify={{ base: 'center', lg: 'flex-start' }}
              css={{
                animation: 'fadeInUp 1s ease-out 0.6s both',
              }}
            >
              {personalityTraits.map((trait, i) => (
                <Badge
                  key={i}
                  px={4}
                  py={2}
                  borderRadius="full"
                  bg="rgba(255, 255, 255, 0.15)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  color="gray.800"
                  fontSize="sm"
                  fontWeight={600}
                  _hover={{
                    bg: 'rgba(255, 255, 255, 0.25)',
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.3s"
                >
                  {trait.icon} {trait.text}
                </Badge>
              ))}
            </Flex>

            {/* Description */}
            <Text
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
              color="gray.800"
              maxW="700px"
              lineHeight="tall"
              opacity={0.95}
              fontWeight={400}
              css={{
                animation: 'fadeInUp 1s ease-out 0.8s both',
              }}
            >
              Mathematics student at Hanoi University of Science with a passion for <Text as="span" fontWeight={700} color="yellow.300">AI</Text>, 
              <Text as="span" fontWeight={700} color="cyan.300"> Software Engineering</Text>, and 
              <Text as="span" fontWeight={700} color="pink.300"> Competitive Programming</Text>. 
              Passionate about building intelligent systems that solves real-world problems.
            </Text>

            {/* Quick Stats */}
            <HStack
              gap={6}
              flexWrap="wrap"
              justify={{ base: 'center', lg: 'flex-start' }}
              css={{
                animation: 'fadeInUp 1s ease-out 1s both',
              }}
            >
              <VStack gap={0} align={{ base: 'center', lg: 'flex-start' }}>
                <Text fontSize="2xl" fontWeight={800} color="yellow.300">
                  1st Place
                </Text>
                <Text fontSize="xs" color="gray.800" opacity={0.9}>
                  VNU Olympiad
                </Text>
              </VStack>
              <VStack gap={0} align={{ base: 'center', lg: 'flex-start' }}>
                <Text fontSize="2xl" fontWeight={800} color="cyan.300">
                  First Prize
                </Text>
                <Text fontSize="xs" color="gray.800" opacity={0.9}>
                  Tech for Green Challenge 2025
                </Text>
              </VStack>
              <VStack gap={0} align={{ base: 'center', lg: 'flex-start' }}>
                <Text fontSize="2xl" fontWeight={800} color="pink.300">
                  Top 1% Worldwide
                </Text>
                <Text fontSize="xs" color="gray.800" opacity={0.9}>
                  Chess.com
                </Text>
              </VStack>
            </HStack>

            {/* CTA Buttons */}
            <Flex
              gap={4}
              direction={{ base: 'column', sm: 'row' }}
              w={{ base: 'full', sm: 'auto' }}
              css={{
                animation: 'fadeInUp 1s ease-out 1.2s both',
              }}
            >
              <Button
                onClick={() => scrollToSection('projects')}
                size={{ base: 'md', md: 'lg' }}
                bg="gray.800"
                color="indigo.700"
                fontWeight={700}
                px={8}
                boxShadow="0 8px 30px rgba(0, 0, 0, 0.3)"
                _hover={{
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                  bg: 'gray.50',
                  color: "gray.800"
                }}
                transition="all 0.3s"
              >
                Explore My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size={{ base: 'md', md: 'lg' }}
                variant="outline"
                borderColor="white"
                borderWidth="2px"
                color="gray.800"
                fontWeight={700}
                px={8}
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(10px)"
                _hover={{
                  bg: 'rgba(255, 255, 255, 0.25)',
                  transform: 'translateY(-4px) scale(1.05)',
                  borderColor: 'white',
                }}
                transition="all 0.3s"
              >
                Let's Connect
              </Button>
              <Link href={resumePdf} download="resume.pdf" _hover={{ textDecoration: 'none' }}>
                <Button
                  as="span"
                  size={{ base: 'md', md: 'lg' }}
                  bg="white"
                  color="gray.800"
                  fontWeight={700}
                  px={8}
                  boxShadow="0 8px 30px rgba(0, 0, 0, 0.2)"
                  _hover={{
                    transform: 'translateY(-4px) scale(1.05)',
                    boxShadow: '0 12px 40px rgba(181, 171, 171, 0.3)',
                    bg: 'gray.50',
                  }}
                  transition="all 0.3s"
                >
                  <HStack gap={2}>
                    <HiDownload />
                    <Text>Download Resume</Text>
                  </HStack>
                </Button>
              </Link>
            </Flex>

            {/* Social Links */}
            <Flex
              gap={6}
              mt={4}
              css={{
                animation: 'fadeInUp 1s ease-out 1.4s both',
              }}
            >
              <Link
                href="https://github.com/cnn008"
                target="_blank"
                rel="noopener noreferrer"
                color="gray.800"
                _hover={{
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.2)',
                }}
                transition="all 0.3s"
                css={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                <FaGithub size={28} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/quoc-hung-nham/"
                target="_blank"
                rel="noopener noreferrer"
                color="gray.800"
                _hover={{
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.2)',
                }}
                transition="all 0.3s"
                css={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                <FaLinkedin size={28} />
              </Link>
              <Link
                href="mailto:chuongnguyenng@gmail.com"
                color="gray.800"
                _hover={{
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.2)',
                }}
                transition="all 0.3s"
                css={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                <FaEnvelope size={28} />
              </Link>
            </Flex>
          </VStack>

          {/* Profile Image with Glow Effect */}
          <Box
            flex={1}
            display={{ base: 'none', lg: 'flex' }}
            justifyContent="center"
            alignItems="center"
            pr={{ lg: 16, xl: 24 }}
            css={{
              animation: 'fadeInRight 1s ease-out 0.4s both',
            }}
          >
            <Box position="relative">
              {/* Glow effect */}
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="450px"
                h="450px"
                borderRadius="full"
                bgGradient="linear(135deg, #6366f1, #ec4899)"
                opacity={0.3}
                filter="blur(40px)"
                css={{
                  animation: 'pulse 3s ease-in-out infinite',
                }}
              />
              <Box
                w="400px"
                h="400px"
                borderRadius="3xl"
                overflow="hidden"
                border="4px solid"
                borderColor="white"
                boxShadow="0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 255, 255, 0.2)"
                position="relative"
              >
                <Image
                  src={profileImage}
                  alt="Nham Quoc Hung"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)"
                  pointerEvents="none"
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>

      {/* Scroll Arrow */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="gray.800"
        cursor="pointer"
        onClick={() => scrollToSection('education')}
        transition="all 0.3s"
        zIndex={10}
        display={{ base: 'none', md: 'block' }}
        css={{
          animation: 'bounce 2s infinite',
          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
        }}
        _hover={{
          color: 'white',
          transform: 'translateX(-50%) translateY(-5px)',
        }}
      >
        <HiArrowDown size={32} />
      </Box>
    </Box>
  )
}

export default Hero
