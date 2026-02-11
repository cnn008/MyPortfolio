import { useState, useEffect } from 'react'
import { Box, Container, Flex, Link, IconButton, useDisclosure, Drawer, VStack, Text, Image } from '@chakra-ui/react'
import { HiMenu, HiX } from 'react-icons/hi'
import profileImage from '../assets/profile.jpeg'

interface NavbarProps {
  activeSection?: string
}

function Navbar({ activeSection = 'home' }: NavbarProps) {
  const { open, onOpen, onClose } = useDisclosure()
  const [, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'awards', label: 'Awards' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'videos', label: 'Videos' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onClose()
    }
  }

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="white"
      backdropFilter="blur(12px)"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.12)"
      zIndex={1000}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      borderBottom="2px solid"
      borderColor="gray.200"
      w="100%"
    >
      <Container maxW="1280px" px={{ base: 6, md: 8 }} w="100%">
        <Flex
          as="nav"
          justify="space-between"
          align="center"
          h={{ base: '64px', md: '72px' }}
        >
          {/* Logo - Enhanced */}
          <Link
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
            display="flex"
            alignItems="center"
            gap={2}
            _hover={{ transform: 'scale(1.05)' }}
            transition="transform 0.2s"
          >
            <Box
              w={{ base: '40px', md: '48px' }}
              h={{ base: '40px', md: '48px' }}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="0 4px 12px rgba(102, 126, 234, 0.4)"
              border="2px solid"
              borderColor="purple.200"
              bg="gray.100"
            >
              <Image
                src={profileImage}
                alt="Profile"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight={700}
              color="gray.800"
              display={{ base: 'none', sm: 'block' }}
            >
              Greetings
            </Text>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <Flex
            as="ul"
            listStyleType="none"
            gap={2}
            align="center"
            display={{ base: 'none', md: 'flex' }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <Box as="li" key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                    px={4}
                    py={2}
                    borderRadius="lg"
                    fontSize="sm"
                    fontWeight={isActive ? 600 : 500}
                    color={isActive ? '#667eea' : 'gray.700'}
                    bg={isActive ? 'purple.50' : 'transparent'}
                    position="relative"
                    _hover={{
                      color: '#667eea',
                      bg: 'purple.50',
                      transform: 'translateY(-1px)',
                    }}
                    transition="all 0.2s ease"
                    className="relative"
                  >
                    {item.label}
                    {isActive && (
                      <Box
                        position="absolute"
                        bottom={0}
                        left="50%"
                        transform="translateX(-50%)"
                        w="6px"
                        h="6px"
                        borderRadius="full"
                        bg="#667eea"
                        boxShadow="0 0 8px rgba(102, 126, 234, 0.6)"
                      />
                    )}
                  </Link>
                </Box>
              )
            })}
          </Flex>

          {/* Mobile Menu Button - Enhanced */}
          <IconButton
            aria-label="Toggle menu"
            display={{ base: 'flex', md: 'none' }}
            variant="ghost"
            onClick={open ? onClose : onOpen}
            color="gray.700"
            size="lg"
            borderRadius="lg"
            _hover={{
              bg: 'purple.50',
              color: '#667eea',
            }}
            transition="all 0.2s"
            backgroundColor="gray.100"
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </IconButton>
        </Flex>
      </Container>

      {/* Mobile Drawer - Enhanced */}
      <Drawer.Root open={open} onOpenChange={(e) => !e.open && onClose()} placement="end">
        <Drawer.Backdrop bg="rgba(0, 0, 0, 0.4)" />
        <Drawer.Positioner>
          <Drawer.Content maxW="320px" bg="white">
            <Drawer.Header
              borderBottom="1px solid"
              borderColor="gray.200"
              bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
              color="blue.600"
              py={6}
            >
              <Flex justify="space-between" align="center">
                <Text fontSize="xl" fontWeight={700} mr={1}>
                  Menu
                </Text>
                <IconButton
                  aria-label="Close menu"
                  variant="ghost"
                  onClick={onClose}
                  size="sm"
                  color="blue.600"
                  _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}
                  backgroundColor="gray.100"
                >
                  <HiX />
                </IconButton>
              </Flex>
            </Drawer.Header>
            <Drawer.Body py={6} px={4}>
              <VStack align="stretch" gap={2}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                      px={4}
                      py={3}
                      borderRadius="lg"
                      color={isActive ? '#667eea' : 'gray.700'}
                      fontWeight={isActive ? 600 : 500}
                      fontSize="md"
                      bg={isActive ? 'purple.50' : 'transparent'}
                      transition="all 0.2s"
                      _hover={{
                        color: '#667eea',
                        bg: 'purple.50',
                        pl: isActive ? 4 : 5,
                        borderLeft: '3px solid',
                        borderColor: '#667eea',
                      }}
                    >
                      <Flex align="center" gap={2}>
                        {isActive && (
                          <Box
                            w="8px"
                            h="8px"
                            borderRadius="full"
                            bg="#667eea"
                            boxShadow="0 0 8px rgba(102, 126, 234, 0.6)"
                            flexShrink={0}
                          />
                        )}
                        <Text>{item.label}</Text>
                      </Flex>
                    </Link>
                  )
                })}
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  )
}

export default Navbar
