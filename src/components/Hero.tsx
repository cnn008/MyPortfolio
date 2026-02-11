import { Box, Container, Heading, Text, Button, Flex, VStack, Link, Image } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profileImage from '../assets/profile.jpeg'

function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 15s ease infinite',
      }}
    >
      {/* Animated floating particles */}
      {[...Array(6)].map((_, i) => {
        const size = 60 + i * 20
        const top = 10 + i * 15
        const left = 5 + i * 12
        const duration = 8 + i * 2
        
        let gradient = 'linear(135deg, #f093fb, #f5576c)'
        if (i % 3 === 1) gradient = 'linear(135deg, #4facfe, #00f2fe)'
        else if (i % 3 === 2) gradient = 'linear(135deg, #43e97b, #38f9d7)'
        
        return (
          <Box
            key={i}
            position="absolute"
            w={`${size}px`}
            h={`${size}px`}
            borderRadius="full"
            bgGradient={gradient}
            opacity={0.2 + i * 0.05}
            top={`${top}%`}
            left={`${left}%`}
            css={{
              animation: `float ${duration}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        )
      })}

      {/* Large animated background orbs */}
      <Box
        position="absolute"
        top="-40%"
        right="-40%"
        w="900px"
        h="900px"
        borderRadius="full"
        bgGradient="linear(135deg, #f093fb 0%, #f5576c 100%)"
        opacity={0.25}
        css={{
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />
      <Box
        position="absolute"
        bottom="-35%"
        left="-35%"
        w="800px"
        h="800px"
        borderRadius="full"
        bgGradient="linear(135deg, #4facfe 0%, #00f2fe 100%)"
        opacity={0.25}
        css={{
          animation: 'pulse 10s ease-in-out infinite',
          transform: 'scale(1.15)',
        }}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="600px"
        h="600px"
        borderRadius="full"
        bgGradient="linear(135deg, #43e97b 0%, #38f9d7 100%)"
        opacity={0.15}
        css={{
          animation: 'pulseCenter 12s ease-in-out infinite',
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
            <Box
              css={{
                animation: 'fadeInUp 1s ease-out',
              }}
            >
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="yellow.300"
                mb={2}
                fontWeight={600}
                letterSpacing="wide"
                opacity={0.95}
                css={{
                  animation: 'fadeIn 1.2s ease-out',
                }}
              >
                Hello, I'm
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                fontWeight={800}
                color="green.200"
                mb={4}
                lineHeight="shorter"
                textShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
                css={{
                  animation: 'fadeInUp 1s ease-out 0.2s both',
                }}
              >
                Nham Quoc Hung
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                fontWeight={600}
                color="orange.300"
                mb={6}
                opacity={0.95}
                css={{
                  animation: 'fadeInUp 1s ease-out 0.4s both',
                }}
              >
                Data Engineer, Software Engineer & Educator
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="white"
                maxW="600px"
                lineHeight="tall"
                opacity={0.9}
                css={{
                  animation: 'fadeInUp 1s ease-out 0.6s both',
                }}
              >
                I am a Computer Science graduate with a specialisation in Data and passion for teaching.
              </Text>
            </Box>

            <Flex
              gap={4}
              direction={{ base: 'column', sm: 'row' }}
              w={{ base: 'full', sm: 'auto' }}
              css={{
                animation: 'fadeInUp 1s ease-out 0.8s both',
              }}
            >
              <Button
                onClick={() => scrollToSection('projects')}
                size={{ base: 'md', md: 'lg' }}
                bg="white"
                color="purple.700"
                fontWeight={600}
                px={8}
                boxShadow="0 8px 30px rgba(0, 0, 0, 0.3)"
                _hover={{
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                  bg: 'gray.50',
                }}
                backgroundColor="gray.100"
                transition="all 0.3s"
                css={{
                  animation: 'buttonPulse 3s ease-in-out infinite',
                }}
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size={{ base: 'md', md: 'lg' }}
                variant="outline"
                borderColor="white"
                borderWidth="2px"
                color="blue.600"
                fontWeight={600}
                px={8}
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(10px)"
                _hover={{
                  bg: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-4px) scale(1.05)',
                  borderColor: 'white',
                }}
                backgroundColor="gray.100"
                transition="all 0.3s"
              >
                Get In Touch
              </Button>
            </Flex>

            <Flex
              gap={6}
              mt={4}
              css={{
                animation: 'fadeInUp 1s ease-out 1s both',
              }}
            >
              <Link
                href="https://github.com/nhamhung"
                target="_blank"
                rel="noopener noreferrer"
                color="white"
                _hover={{
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.2)',
                }}
                transition="all 0.3s"
                css={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/quoc-hung-nham/"
                target="_blank"
                rel="noopener noreferrer"
                color="white"
                _hover={{
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.2)',
                }}
                transition="all 0.3s"
                css={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="mailto:nhamhung.gttn@gmail.com"
                color="white"
                _hover={{
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.2)',
                }}
                transition="all 0.3s"
                css={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                <FaEnvelope size={24} />
              </Link>
            </Flex>
          </VStack>

          <Box
            flex={1}
            display={{ base: 'none', lg: 'flex' }}
            justifyContent="center"
            alignItems="center"
            css={{
              animation: 'fadeInRight 1s ease-out 0.4s both',
            }}
          >
            <Box
              w="400px"
              h="400px"
              borderRadius="2xl"
              overflow="hidden"
              border="4px solid"
              borderColor="white"
              boxShadow="0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 255, 255, 0.2)"
              position="relative"
              css={{
                animation: 'float 6s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-20px)' },
                },
              }}
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
                bgGradient="linear(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)"
                pointerEvents="none"
              />
            </Box>
          </Box>
        </Flex>
      </Container>

      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="white"
        cursor="pointer"
        onClick={() => scrollToSection('about')}
        transition="all 0.3s"
        zIndex={10}
        display={{ base: 'none', md: 'block' }}
        css={{
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(-10px)' },
          },
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

