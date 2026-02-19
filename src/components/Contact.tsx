import { useState } from 'react'
import { Box, Heading, Text, VStack, HStack, Link, Button, Input, Textarea, SimpleGrid } from '@chakra-ui/react'
import { FaGithub, FaEnvelope } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:chuongnguyenng@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <Box
      id="contact"
      minH="100vh"
      w="100%"
      position="relative"
      overflow="hidden"
      bg="#fafbff"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 16, md: 24 }}
      px={0}
    >
      {/* Mesh-style gradient layers */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.5}
        pointerEvents="none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(99, 102, 241, 0.18) 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 55%),
            linear-gradient(135deg, rgba(255,255,255,0.9) 0%, transparent 50%),
            linear-gradient(315deg, rgba(238,242,255,0.8) 0%, transparent 45%)
          `,
          backgroundSize: '100% 100%',
        }}
      />
      {/* Animated organic blobs */}
      <Box
        className="contact-blob-1"
        position="absolute"
        top="10%"
        right="5%"
        w={{ base: '280px', md: '380px' }}
        h={{ base: '280px', md: '380px' }}
        bgGradient="linear(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.12) 100%)"
        filter="blur(50px)"
        pointerEvents="none"
      />
      <Box
        className="contact-blob-2"
        position="absolute"
        bottom="15%"
        left="0%"
        w={{ base: '260px', md: '340px' }}
        h={{ base: '260px', md: '340px' }}
        bgGradient="linear(225deg, rgba(139, 92, 246, 0.18) 0%, rgba(236, 72, 153, 0.1) 100%)"
        filter="blur(55px)"
        pointerEvents="none"
      />
      <Box
        className="contact-blob-3"
        position="absolute"
        top="55%"
        left="40%"
        w={{ base: '200px', md: '260px' }}
        h={{ base: '200px', md: '260px' }}
        bgGradient="radial(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)"
        filter="blur(45px)"
        pointerEvents="none"
      />
      {/* Dot pattern overlay */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.4}
        pointerEvents="none"
        bgImage="radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0)"
        bgSize="24px 24px"
        style={{ backgroundPosition: '0 0' }}
      />
      {/* Soft vignette */}
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        bgGradient="radial(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(248,250,255,0.6) 100%)"
      />

      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} position="relative" zIndex={1} maxW="1100px" mx="auto">
        {/* Two-column layout: info left, form right */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 10, lg: 12 }}
          alignItems="start"
        >
          {/* Left: heading + tagline + social */}
          <VStack align={{ base: 'center', lg: 'stretch' }} gap={6} textAlign={{ base: 'center', lg: 'left' }}>
            <VStack gap={2} align={{ base: 'center', lg: 'stretch' }}>
              <Text
                fontSize="sm"
                fontWeight={600}
                color="indigo.600"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Get in touch
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight={700}
                color="gray.800"
                lineHeight="short"
              >
                Let&apos;s work together
              </Heading>
            </VStack>
            <Text
              fontSize="md"
              color="gray.600"
              maxW="400px"
              lineHeight="tall"
              mx={{ base: 'auto', lg: 0 }}
            >
              Open to academic collaborations, research opportunities, and interesting projects. Say hello or drop a line.
            </Text>
            <VStack align={{ base: 'center', lg: 'stretch' }} gap={4} pt={2}>
              <Text fontSize="sm" fontWeight={600} color="gray.500" textTransform="uppercase" letterSpacing="wide">
                Connect
              </Text>
              <HStack gap={4} flexWrap="wrap" justify={{ base: 'center', lg: 'flex-start' }}>
                <Link
                  href="https://github.com/cnn008"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Box
                    w="44px"
                    h="44px"
                    borderRadius="lg"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ borderColor: 'indigo.400', color: 'indigo.600', bg: 'indigo.50' }}
                    transition="all 0.2s"
                    color="gray.600"
                  >
                    <FaGithub size={20} />
                  </Box>
                </Link>
                <Link href="mailto:chuongnguyenng@gmail.com" _hover={{ textDecoration: 'none' }}>
                  <Box
                    w="44px"
                    h="44px"
                    borderRadius="lg"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ borderColor: 'indigo.400', color: 'indigo.600', bg: 'indigo.50' }}
                    transition="all 0.2s"
                    color="gray.600"
                  >
                    <FaEnvelope size={20} />
                  </Box>
                </Link>
              </HStack>
            </VStack>
          </VStack>

          {/* Right: form */}
          <Box
            bg="white"
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="sm"
          >
            <form onSubmit={handleSubmit}>
              <VStack gap={5} align="stretch">
                <HStack gap={4} align="stretch" flexDir={{ base: 'column', sm: 'row' }}>
                  <Box flex={1} w="100%">
                    <Text fontSize="xs" fontWeight={600} color="gray.500" mb={1.5} textTransform="uppercase" letterSpacing="wide">
                      Name
                    </Text>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      size="md"
                      borderRadius="md"
                      borderColor="gray.200"
                      _focus={{ borderColor: 'indigo.500', boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.3)' }}
                    />
                  </Box>
                  <Box flex={1} w="100%">
                    <Text fontSize="xs" fontWeight={600} color="gray.500" mb={1.5} textTransform="uppercase" letterSpacing="wide">
                      Email
                    </Text>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      size="md"
                      borderRadius="md"
                      borderColor="gray.200"
                      _focus={{ borderColor: 'indigo.500', boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.3)' }}
                    />
                  </Box>
                </HStack>
                <Box>
                  <Text fontSize="xs" fontWeight={600} color="gray.500" mb={1.5} textTransform="uppercase" letterSpacing="wide">
                    Subject
                  </Text>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    size="md"
                    borderRadius="md"
                    borderColor="gray.200"
                    _focus={{ borderColor: 'indigo.500', boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.3)' }}
                  />
                </Box>
                <Box>
                  <Text fontSize="xs" fontWeight={600} color="gray.500" mb={1.5} textTransform="uppercase" letterSpacing="wide">
                    Message
                  </Text>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={5}
                    borderRadius="md"
                    borderColor="gray.200"
                    resize="vertical"
                    _focus={{ borderColor: 'indigo.500', boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.3)' }}
                  />
                </Box>
                <Button
                  type="submit"
                  size="md"
                  w="100%"
                  bg="indigo.600"
                  color="gray.800"
                  fontWeight={600}
                  borderRadius="md"
                  _hover={{ bg: 'indigo.700' }}
                  transition="all 0.2s"
                >
                  Send message
                </Button>
              </VStack>
            </form>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Contact
