import { useState, useMemo } from 'react'
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Button,
  HStack,
  Flex,
  useDisclosure,
  Dialog,
  Badge,
} from '@chakra-ui/react'
import { HiArrowDown, HiX } from 'react-icons/hi'
import { FiExternalLink, FiFileText } from 'react-icons/fi'

// Load all PDFs from the two asset folders (eager URLs for build)
const certGlob = import.meta.glob<string>(
  '../assets/certificates_of_awards/*.pdf',
  { query: '?url', import: 'default', eager: true }
)
const extraGlob = import.meta.glob<string>(
  '../assets/extra_activities/*.pdf',
  { query: '?url', import: 'default', eager: true }
)

/** Derive display title from filename: remove .pdf and leading "N." */
function titleFromPath(path: string): string {
  const filename = path.split('/').pop() || path
  const noExt = filename.replace(/\.pdf$/i, '')
  const noLeadingNum = noExt.replace(/^\d+\.\s*/, '')
  return noLeadingNum.trim() || noExt
}

type PdfItem = { title: string; url: string }

function buildPdfList(glob: Record<string, string>): PdfItem[] {
  return Object.entries(glob)
    .map(([path, url]) => ({ title: titleFromPath(path), url }))
    .sort((a, b) => a.title.localeCompare(b.title))
}

function Gallery() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
  const { open, onOpen, onClose } = useDisclosure()

  const certificates = useMemo(() => buildPdfList(certGlob as Record<string, string>), [])
  const extraActivities = useMemo(() => buildPdfList(extraGlob as Record<string, string>), [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const openPreview = (url: string) => {
    setSelectedPdf(url)
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
            📜 Certificates & Awards
          </Box>
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight={800}
            textAlign="center"
            lineHeight="shorter"
            color="gray.800"
            letterSpacing="tight"
          >
            Certificates & Awards
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
            PDF certificates from awards and extracurricular activities.
          </Text>
        </VStack>

        {/* Awards & Certificates */}
        <VStack align="stretch" gap={6} mb={12}>
          <HStack gap={3} flexWrap="wrap">
            <Badge
              bg="indigo.100"
              color="indigo.800"
              border="1px solid"
              borderColor="indigo.200"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight={700}
            >
              Awards & Certificates
            </Badge>
            <Text fontSize="sm" color="gray.500">
              {certificates.length} documents
            </Text>
          </HStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
            {certificates.map((item) => (
              <Box
                key={item.url}
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                bg="white"
                border="2px solid"
                borderColor="gray.100"
                position="relative"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(99, 102, 241, 0.2)',
                  borderColor: 'indigo.300',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="4px"
                  bgGradient="linear(135deg, #6366f1, #8b5cf6)"
                />
                {/* Full certificate preview - visible without clicking, centred */}
                <Box
                  w="100%"
                  minH={{ base: '360px', md: '480px' }}
                  h={{ base: '360px', md: '520px' }}
                  bg="gray.100"
                  borderBottom="1px solid"
                  borderColor="gray.200"
                  overflow="hidden"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <iframe
                    src={`${item.url}#view=Fit`}
                    title={`Preview: ${item.title}`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      pointerEvents: 'none',
                      display: 'block',
                    }}
                  />
                </Box>
                <VStack align="stretch" p={5} gap={4}>
                  <HStack gap={3}>
                    <Box
                      p={3}
                      borderRadius="xl"
                      bg="indigo.50"
                      color="indigo.600"
                      fontSize="2xl"
                    >
                      <FiFileText />
                    </Box>
                    <Heading as="h3" fontSize="md" fontWeight={600} color="gray.900" lineHeight="short" lineClamp={3}>
                      {item.title}
                    </Heading>
                  </HStack>
                  <HStack gap={2} flexWrap="wrap">
                    <Button
                      size="sm"
                      variant="outline"
                      colorPalette="indigo"
                      onClick={() => window.open(item.url, '_blank')}
                    >
                      <HStack gap={2}>
                        <FiExternalLink />
                        <Text>Open PDF</Text>
                      </HStack>
                    </Button>
                    <Button
                      size="sm"
                      bg="indigo.600"
                      color="gray.800"
                      _hover={{ bg: 'indigo.700' }}
                      onClick={() => openPreview(item.url)}
                    >
                      Full-screen preview
                    </Button>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Extra Activities */}
        <VStack align="stretch" gap={6}>
          <HStack gap={3} flexWrap="wrap">
            <Badge
              bg="indigo.100"
              color="indigo.800"
              border="1px solid"
              borderColor="indigo.200"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight={700}
            >
              Extra Activities
            </Badge>
            <Text fontSize="sm" color="gray.500">
              {extraActivities.length} documents
            </Text>
          </HStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
            {extraActivities.map((item) => (
              <Box
                key={item.url}
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                bg="white"
                border="2px solid"
                borderColor="gray.100"
                position="relative"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(99, 102, 241, 0.2)',
                  borderColor: 'indigo.300',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="4px"
                  bgGradient="linear(135deg, #6366f1, #8b5cf6)"
                />
                {/* Full certificate preview - visible without clicking, centred */}
                <Box
                  w="100%"
                  minH={{ base: '360px', md: '480px' }}
                  h={{ base: '360px', md: '520px' }}
                  bg="gray.100"
                  borderBottom="1px solid"
                  borderColor="gray.200"
                  overflow="hidden"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <iframe
                    src={`${item.url}#view=Fit`}
                    title={`Preview: ${item.title}`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      pointerEvents: 'none',
                      display: 'block',
                    }}
                  />
                </Box>
                <VStack align="stretch" p={5} gap={4}>
                  <HStack gap={3}>
                    <Box
                      p={3}
                      borderRadius="xl"
                      bg="indigo.50"
                      color="indigo.600"
                      fontSize="2xl"
                    >
                      <FiFileText />
                    </Box>
                    <Heading as="h3" fontSize="md" fontWeight={600} color="gray.900" lineHeight="short" lineClamp={3}>
                      {item.title}
                    </Heading>
                  </HStack>
                  <HStack gap={2} flexWrap="wrap">
                    <Button
                      size="sm"
                      variant="outline"
                      colorPalette="indigo"
                      onClick={() => window.open(item.url, '_blank')}
                    >
                      <HStack gap={2}>
                        <FiExternalLink />
                        <Text>Open PDF</Text>
                      </HStack>
                    </Button>
                    <Button
                      size="sm"
                      bg="indigo.600"
                      color="gray.800"
                      _hover={{ bg: 'indigo.700' }}
                      onClick={() => openPreview(item.url)}
                    >
                      Full-screen preview
                    </Button>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>

      <Dialog.Root open={open} onOpenChange={(e) => !e.open && (onClose(), setSelectedPdf(null))}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="95vw" w="960px" h="90vh" display="flex" flexDirection="column" position="relative">
            {/* Visible header bar with close button - always on top of PDF */}
            <Flex
              position="absolute"
              top={0}
              left={0}
              right={0}
              zIndex={20}
              justify="flex-end"
              align="center"
              px={4}
              py={3}
              bg="gray.800"
              borderBottom="1px solid"
              borderColor="gray.600"
              borderRadius="xl xl 0 0"
            >
              <Button
                onClick={() => { onClose(); setSelectedPdf(null) }}
                size="md"
                bg="white"
                color="gray.800"
                fontWeight={700}
                px={5}
                _hover={{ bg: 'gray.100', color: 'indigo.600' }}
              >
                <HStack gap={2}>
                  <HiX size={20} />
                  <Text>Close</Text>
                </HStack>
              </Button>
            </Flex>
            {selectedPdf && (
              <>
                <Box flex="1" minH="0" display="flex" flexDirection="column" p={4} pt={16} gap={3}>
                  <Box
                    flex="1"
                    minH="400px"
                    borderRadius="xl"
                    overflow="hidden"
                    bg="gray.100"
                    border="1px solid"
                    borderColor="gray.200"
                  >
                    <iframe
                      src={`${selectedPdf}#view=FitH`}
                      title="PDF preview"
                      style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '70vh',
                        border: 'none',
                        display: 'block',
                      }}
                    />
                  </Box>
                  <HStack justify="flex-end" gap={2}>
                    <Button
                      size="sm"
                      variant="outline"
                      colorPalette="indigo"
                      onClick={() => window.open(selectedPdf, '_blank')}
                    >
                      <HStack gap={2}>
                        <FiExternalLink />
                        <Text>Open in new tab</Text>
                      </HStack>
                    </Button>
                  </HStack>
                </Box>
              </>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>

      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="indigo.600"
        _hover={{ color: 'indigo.700', transform: 'translateX(-50%) translateY(4px)' }}
        cursor="pointer"
        onClick={() => scrollToSection('extracurricular')}
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
