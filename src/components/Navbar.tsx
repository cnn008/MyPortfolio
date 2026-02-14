import { useState, useEffect } from 'react'
import { Box, Container, Flex, Link, IconButton, useDisclosure, Drawer, VStack, Text, Image } from '@chakra-ui/react'
import { HiMenu, HiX } from 'react-icons/hi'
import profileImage from '../assets/profile.png'

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
    { id: 'awards', label: 'Awards' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Certificates' },
    { id: 'extracurricular', label: 'Extracurricular' },
    { id: 'hobbies', label: 'Hobbies' },
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
      bgColor="rgba(255, 255, 255, 0.92)"
      zIndex={1000}
      transition="all 0.3s ease"
      borderBottom="1px solid"
      borderColor="gray.200"
      w="100%"
    >
      <Container maxW="1280px" px={{ base: 4, md: 6 }} w="100%">
        <Flex
          as="nav"
          justify="space-between"
          align="center"
          h={{ base: '56px', md: '64px' }}
        >
          {/* Logo - compact */}
          <Link
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
            display="flex"
            alignItems="center"
            gap={2}
            _hover={{ opacity: 0.85 }}
            transition="opacity 0.2s"
          >
            <Box
              w={{ base: '36px', md: '40px' }}
              h={{ base: '36px', md: '40px' }}
              borderRadius="full"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.200"
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
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight={700}
              color="gray.800"
              display={{ base: 'none', sm: 'block' }}
            >
              Nguyen Chuong
            </Text>
          </Link>

          {/* Desktop: centered nav with underline active state */}
          <Flex
            as="ul"
            listStyleType="none"
            gap={1}
            align="center"
            display={{ base: 'none', md: 'flex' }}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <Box as="li" key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                    px={3}
                    py={2}
                    fontSize="sm"
                    fontWeight={500}
                    color={isActive ? 'indigo.600' : 'gray.600'}
                    borderBottom="2px solid"
                    borderColor={isActive ? 'indigo.500' : 'transparent'}
                    _hover={{
                      color: 'indigo.600',
                      borderColor: 'indigo.200',
                    }}
                    transition="all 0.2s ease"
                  >
                    {item.label}
                  </Link>
                </Box>
              )
            })}
          </Flex>

          {/* Desktop: right spacer for balance (or CTA) */}
          <Box w={{ base: 0, md: '120px' }} flexShrink={0} />

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="Toggle menu"
            display={{ base: 'flex', md: 'none' }}
            variant="ghost"
            onClick={open ? onClose : onOpen}
            color="gray.700"
            size="md"
            borderRadius="md"
            _hover={{ bg: 'gray.100', color: 'gray.900' }}
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </IconButton>
        </Flex>
      </Container>

      {/* Mobile Drawer - simple list format */}
      <Drawer.Root open={open} onOpenChange={(e) => !e.open && onClose()} placement="end">
        <Drawer.Backdrop bg="rgba(0, 0, 0, 0.3)" />
        <Drawer.Positioner>
          <Drawer.Content maxW="280px" bg="white">
            <Drawer.Header borderBottom="1px solid" borderColor="gray.100" py={4} px={4}>
              <Flex justify="space-between" align="center">
                <Text fontSize="sm" fontWeight={600} color="gray.500" textTransform="uppercase" letterSpacing="wider">
                  Menu
                </Text>
                <IconButton
                  aria-label="Close menu"
                  variant="ghost"
                  onClick={onClose}
                  size="sm"
                  color="gray.600"
                  _hover={{ bg: 'gray.100' }}
                >
                  <HiX />
                </IconButton>
              </Flex>
            </Drawer.Header>
            <Drawer.Body py={4} px={2}>
              <VStack align="stretch" gap={0}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                      px={4}
                      py={3}
                      borderRadius="md"
                      color={isActive ? 'indigo.600' : 'gray.700'}
                      fontWeight={isActive ? 600 : 500}
                      fontSize="sm"
                      bg={isActive ? 'indigo.50' : 'transparent'}
                      borderLeft="3px solid"
                      borderColor={isActive ? 'indigo.500' : 'transparent'}
                      _hover={{ bg: 'gray.50', color: 'indigo.600' }}
                    >
                      {item.label}
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
