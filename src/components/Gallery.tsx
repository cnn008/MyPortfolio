import { useState } from 'react'
import { Box, Heading, SimpleGrid, Image, Text, Dialog, VStack } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import photo1 from '../assets/photo_1.jpg'
import photo2 from '../assets/photo_2.jpg'
import photo4 from '../assets/photo_4.jpg'
import photo3 from '../assets/photo_3.jpg'
import photo5 from '../assets/photo_5.jpg'
import photo6 from '../assets/photo_6.jpg'

function Gallery() {
  const { open, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const images = [
    {
      id: 1,
      src: photo1,
      alt: 'Gallery Image 1',
      title: 'Zhonghua Secondary School',
      description: 'My first school in Singapore, completed the GCE O-levels with 7 A\'s',
    },
    {
      id: 2,
      src: photo2,
      alt: 'Gallery Image 2',
      title: 'Saint Andrew\'s Junior College',
      description: 'My next school in Singapore, completed my A-levels with 6 A\'s',
    },
    {
      id: 3,
      src: photo3,
      alt: 'Gallery Image 3',
      title: 'National University of Singapore',
      description: 'Started my undergraduate studies in Singapore, completed my Bachelor\'s degree in Computer Science with Honours',
    },
    {
      id: 4,
      src: photo4,
      alt: 'Gallery Image 4',
      title: 'The University of Texas at Austin',
      description: 'Graduated from NUS and started my master\'s studies in Computer Science at UT Austin',
    },
    {
      id: 5,
      src: photo5,
      alt: 'Gallery Image 5',
      title: 'Sea Limited',
      description: 'My first job in Singapore, working as a Data Engineer',
    },
    {
      id: 6,
      src: photo6,
      alt: 'Gallery Image 6',
      title: 'Rakuten Asia Pte Ltd',
      description: 'My second job in Singapore, working as a Software Engineer',
    },
  ]

  const openModal = (image: any) => {
    setSelectedImage(image)
    onOpen()
  }

  return (
    <Box
      id="gallery"
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
            Learning Journey
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
            Learning Journey
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {images.map((image) => (
            <Box
              key={image.id}
              cursor="pointer"
              onClick={() => openModal(image)}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              bg="white"
              border="1px solid"
              borderColor="gray.100"
              _hover={{
                transform: 'scale(1.03)',
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
                borderColor: 'purple.200',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Image
                src={image.src}
                alt={image.alt}
                w="100%"
                h="220px"
                objectFit="cover"
              />
              <Box p={5}>
                <Heading as="h3" fontSize="md" mb={2} fontWeight={600} color="gray.900">
                  {image.title}
                </Heading>
                <Text fontSize="sm" color="gray.800" lineHeight="tall" fontWeight={500}>
                  {image.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="800px">
            <Dialog.CloseTrigger />
            {selectedImage && (
              <Box p={6}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  w="100%"
                  mb={4}
                  borderRadius="md"
                />
                <Heading as="h3" fontSize="md" mb={2} color="gray.900">
                  {selectedImage.title}
                </Heading>
                <Text color="gray.800" fontWeight={500}>
                  {selectedImage.description}
                </Text>
              </Box>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>

      {/* Scroll Arrow */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="purple.600"
        _hover={{ color: 'purple.700', transform: 'translateX(-50%) translateY(4px)' }}
        cursor="pointer"
        onClick={() => scrollToSection('videos')}
        transition="all 0.3s"
        zIndex={2}
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={32} />
      </Box>
    </Box>
  )
}

export default Gallery

