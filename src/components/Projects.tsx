import { useState } from 'react'
import { Box, Heading, Text, SimpleGrid, Badge, HStack, Button, VStack, useDisclosure, Dialog } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'

function Projects() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const [selectedPreview, setSelectedPreview] = useState<{ url: string; type: 'website' | 'pdf' } | null>(null)
  const { open, onOpen, onClose } = useDisclosure()

  const projects = [
    {
      title: 'We2Go AI – Intelligent Travel Planning Platform',
      period: '10/2025 – 1/2026',
      description: 'Built a full-stack, AI-driven web application capable of generating highly personalised, end-to-end itinerary suggestions and travel insights, significantly minimizing manual planning time and efforts.',
      details: [
        'Leveraged React (Vite) for the frontend, FastAPI for the backend, and Supabase for secure user authentication, efficient data storage, and performant real-time queries',
        'Engineered an autonomous AI Agent using a Plan-Act-Observe loop powered by Google Gemini to structure complex user requests into concrete travel itineraries and booking workflows',
        'Implemented Server-Sent Events (SSE) for real-time response streaming and enforced strict JSON schema constraints on generated output to mitigate hallucinations',
        'Maintained an average response latency of <1.5s to ensure optimal user experience',
      ],
      technologies: ['React', 'Vite', 'FastAPI', 'Supabase', 'Google Gemini', 'AI Agent', 'SSE', 'Python'],
      github: 'https://github.com/cnn008/We2Go',
      demo: 'https://www.we2go.asia/',
      previewUrl: 'https://www.we2go.asia/',
      previewType: 'website' as const,
    },
    {
      title: 'Research Collaborator - University of Transport and Communications',
      period: '10/2025 - 12/2025',
      description: 'Developed an AI-based traffic violation detection system to replace manual monitoring efforts and enhance traffic management efficiency for government agencies.',
      details: [
        'Specialised in the application of computer vision techniques using YOLOv5 and OCR to identify helmet violations and extract license plate details automatically',
        'Trained, refined, and evaluated continuously to achieve a final model accuracy of 95.2% and an average mAP@0.5 of 0.843',
        'Designed and maintained a responsive user interface using Tkinter',
        'Set up a full violation report and review workflow utilising an automated email notification module built on Yagmail',
      ],
      technologies: ['YOLOv5', 'OCR', 'Computer Vision', 'Python', 'Tkinter', 'Yagmail', 'Deep Learning'],
      github: '#',
      demo: 'https://drive.google.com/file/d/18g6xcmIwRbBHx4eAXwpRzZr8RlPJvfWT/view',
      previewUrl: 'https://drive.google.com/file/d/18g6xcmIwRbBHx4eAXwpRzZr8RlPJvfWT/preview',
      previewType: 'pdf' as const,
    },
    {
      title: 'Research Collaborator - VNU Institute of Vietnamese Studies and Development Science',
      period: '03/2025 – 10/2025',
      description: 'Developed the "Smart Community-Based Tourism Map Model" to promote sustainable tourism in Ta Xua mountain range, Son La Province, Vietnam.',
      details: [
        'Built the "Smart Community-Based Tourism Map Model" by integrating spatial information using Geographic Information Systems and database management systems to evaluate tourism resources and existing community models.',
        'Applied technical expertise in AI, Data Analytics, and Web/App development to transform raw data into actionable insights, promoting sustainable tourism and enhancing the value of Ta Xua\'s cultural assets.',
      ],
      technologies: ['GIS', 'Database', 'AI', 'Data Analytics', 'Web/App Development', 'Sustainable Tourism'],
      github: '#',
      demo: '#',
    },
  ]

  const handlePreview = (url: string, type: 'website' | 'pdf') => {
    setSelectedPreview({ url, type })
    onOpen()
  }

  return (
    <Box
      id="projects"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="white"
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
            🚀 Featured Projects
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
            Featured Projects
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {projects.map((project, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="2xl"
              p={8}
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
                {/* Title and Period */}
                <Box>
                  <Heading as="h3" fontSize="xl" mb={2} color="gray.900" fontWeight={700}>
                    {project.title}
                  </Heading>
                  {project.period && (
                    <Badge
                      bgGradient="linear(135deg, #6366f1, #8b5cf6)"
                      color="gray.800"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight={600}
                      boxShadow="0 2px 8px rgba(99, 102, 241, 0.3)"
                      w="fit-content"
                    >
                      {project.period}
                    </Badge>
                  )}
                </Box>
                
                {/* Description */}
                <Text color="gray.700" lineHeight="tall" fontSize="sm" fontWeight={400}>
                  {project.description}
                </Text>
                
                {/* Details */}
                {project.details && project.details.length > 0 && (
                  <Box pt={2} borderTop="1px solid" borderColor="gray.200">
                    <VStack align="stretch" gap={2}>
                      {project.details.map((detail, i) => (
                        <Box key={i} color="gray.700" pl={5} position="relative" fontSize="sm" lineHeight="tall">
                          <Box
                            as="span"
                            position="absolute"
                            left={0}
                            color="indigo.600"
                            fontWeight="bold"
                          >
                            •
                          </Box>
                          {detail}
                        </Box>
                      ))}
                    </VStack>
                  </Box>
                )}
                
                {/* Technologies */}
                <Box pt={2}>
                  <HStack flexWrap="wrap" gap={2}>
                    {project.technologies.map((tech, i) => {
                      const colors = [
                        { bg: 'indigo.50', color: 'indigo.700', border: 'indigo.200' },
                        { bg: 'purple.50', color: 'purple.700', border: 'purple.200' },
                        { bg: 'pink.50', color: 'pink.700', border: 'pink.200' },
                        { bg: 'blue.50', color: 'blue.700', border: 'blue.200' },
                        { bg: 'cyan.50', color: 'cyan.700', border: 'cyan.200' },
                      ]
                      const colorScheme = colors[i % colors.length]
                      return (
                        <Badge
                          key={i}
                          bg={colorScheme.bg}
                          color={colorScheme.color}
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                          fontWeight={600}
                          border="1px solid"
                          borderColor={colorScheme.border}
                        >
                          {tech}
                        </Badge>
                      )
                    })}
                  </HStack>
                </Box>
                
                {/* Action Buttons */}
                <HStack gap={3} pt={2} flexWrap="wrap">
                  <Button
                    onClick={() => project.github !== '#' && window.open(project.github, '_blank')}
                    size="sm"
                    variant="outline"
                    borderColor="indigo.300"
                    color="indigo.600"
                    fontWeight={600}
                    disabled={project.github === '#'}
                    _hover={{
                      bg: 'indigo.50',
                      borderColor: 'indigo.400',
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.2s"
                  >
                    <HStack gap={2}>
                      <Text>GitHub</Text>
                      <FiExternalLink />
                    </HStack>
                  </Button>
                  {project.previewUrl && (
                    <Button
                      onClick={() => handlePreview(project.previewUrl!, project.previewType!)}
                      size="sm"
                      bgGradient="linear(135deg, #6366f1, #8b5cf6)"
                      color="gray.800"
                      fontWeight={600}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(99, 102, 241, 0.4)',
                        bgGradient: 'linear(135deg, #8b5cf6, #ec4899)',
                      }}
                      transition="all 0.2s"
                    >
                      <HStack gap={2}>
                        <Text>Preview</Text>
                        <FiExternalLink />
                      </HStack>
                    </Button>
                  )}
                  <Button
                    onClick={() => project.demo !== '#' && window.open(project.demo, '_blank')}
                    size="sm"
                    variant="outline"
                    borderColor="indigo.300"
                    color="indigo.600"
                    fontWeight={600}
                    disabled={project.demo === '#'}
                    _hover={{
                      bg: 'indigo.50',
                      borderColor: 'indigo.400',
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.2s"
                  >
                    <HStack gap={2}>
                      <Text>Open</Text>
                      <FiExternalLink />
                    </HStack>
                  </Button>
                </HStack>
              </VStack>
            </Box>
          ))}
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
          onClick={() => scrollToSection('gallery')}
          transition="all 0.3s"
          zIndex={2}
          display={{ base: 'none', md: 'block' }}
        >
          <HiArrowDown size={32} />
        </Box>
      </Box>

      {/* Preview Dialog */}
      <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()}>
        <Dialog.Backdrop bg="rgba(0, 0, 0, 0.6)" />
        <Dialog.Positioner>
          <Dialog.Content maxW="90vw" w="1200px" h="90vh" bg="white" borderRadius="xl">
            <Dialog.Header borderBottom="1px solid" borderColor="gray.200" pb={4}>
              <HStack justify="space-between" align="center">
                <Heading fontSize="xl" fontWeight={700}>
                  Project Preview
                </Heading>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="sm"
                  _hover={{ bg: 'gray.100' }}
                >
                  ✕
                </Button>
              </HStack>
            </Dialog.Header>
            <Dialog.Body p={0} overflow="hidden">
              {selectedPreview && (
                <Box w="100%" h="calc(90vh - 80px)" position="relative">
                  <iframe
                    src={selectedPreview.url}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      borderRadius: '0',
                    }}
                    title="Project Preview"
                  />
                </Box>
              )}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  )
}

export default Projects

