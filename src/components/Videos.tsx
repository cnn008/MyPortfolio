import { Box, Heading, Text, Link, SimpleGrid, VStack } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'

function Videos() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const videos = [
    {
      id: 1,
      title: 'Tự học IT như nào hiệu quả nhất?',
      description: 'Với vô số các nguồn tài nguyên học IT từ miễn phí cho tới mất phí, làm sao để chúng ta có thể quyết định được cách học nào là hiệu quả cho bản thân mình nhất?',
      videoId: '1Whd4I0b1u4',
      thumbnail: 'https://youtu.be/1Whd4I0b1u4?si=NyZBJaONBFr6PlGV',
    },
    {
      id: 2,
      title: 'Xử lý dữ liệu trong thời gian thực với Apache Kafka',
      description: 'Ở trong video này, chúng ta sẽ cùng tìm hiểu cách sử dụng Apache Kafka để xử lý dữ liệu trong thời gian thực nhé!',
      videoId: 'jfu4ORM8k9Q',
      thumbnail: 'https://youtu.be/jfu4ORM8k9Q',
    },
    {
      id: 3,
      title: 'Mình có hối tiếc khi học Thạc sĩ Khoa học máy tính?',
      description: 'Ở trong video này, mình sẽ chia sẻ những trải nghiệm và đúc kết được sau quá trình apply và học Thạc sĩ ngành Khoa học máy tính',
      videoId: 'lBOcJR7QOMs',
      thumbnail: 'https://youtu.be/lBOcJR7QOMs',
    },
    {
      id: 4,
      title: 'Cách mình tối ưu hoá thời gian cho việc học IT?',
      description: 'Ở trong video này, mình muốn chia sẻ một số đúc kết về các cách mình đang làm để tối ưu hoá thời gian cho việc học IT.',
      videoId: 'C7d0LEefUcw',
      thumbnail: 'https://youtu.be/C7d0LEefUcw',
    },
  ]

  const getEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
  }

  return (
    <Box
      id="videos"
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
            color="purple.600"
            textTransform="uppercase"
            letterSpacing="wide"
            px={6}
            py={3}
            bg="white"
            borderRadius="full"
            boxShadow="md"
          >
            Educational Videos
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
            Educational Videos
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {videos.map((video) => (
            <Box
              key={video.id}
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor="gray.100"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
                borderColor: 'purple.200',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Box
                position="relative"
                paddingBottom="56.25%"
                height="0"
                overflow="hidden"
                bg="gray.100"
              >
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  src={getEmbedUrl(video.videoId)}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <Box p={6}>
                <Heading as="h3" fontSize="lg" mb={3} color="gray.900" fontWeight={700}>
                  {video.title}
                </Heading>
                <Text color="gray.800" mb={4} lineHeight="tall" fontSize="sm" fontWeight={500}>
                  {video.description}
                </Text>
                <Link
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="purple.700"
                  fontWeight={600}
                  _hover={{
                    color: 'purple.800',
                    textDecoration: 'underline',
                  }}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontSize="sm"
                >
                  Watch on YouTube <FiExternalLink />
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* Scroll Arrow */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="purple.600"
          _hover={{ color: 'purple.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => scrollToSection('skills')}
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

export default Videos

