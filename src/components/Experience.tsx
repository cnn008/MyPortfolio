import { Box, Heading, Text, VStack, Badge, HStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Experience() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const experiences = [
    {
      title: 'Educator',
      company: 'AVK+',
      period: '2025 - Present',
      description: [
        'Mentored students both in-person and online on all things education-related and in various formats.',
        'Covered subjects such as: Math, Science, English, Economics and Computer Science.',
        'Prepared students for various certifications such as: SAT, ACT, IELTS, GCSE, GCE O-levels and A-levels, etc.',
        'Supported students in applications and interviews for various scholarships and entrance exams such as ASEAN, A-Star, TestAS, AEIS, etc.',
      ]
    },
    {
      title: 'Data Engineer',
      company: 'Torilab Inc.',
      period: '2025 - Present',
      description: [
        'Supported BI team in building over 20 data models across 5 different applications and present actionable insights to company executives and business leaders on a biweekly basis',
        'Design and maintain pipelines to collect data from various sources that power the company\'s analytics ecosystem and enable decision-making dashboard creation in Looker',
        'Collaborate closely with cross-functional teams including Mobile, Frontend, Backend, Marketing, Sales and Product to ensure data quality, support self-service analytics, and drive data-driven business growth'
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Rakuten Asia Pte Ltd',
      period: '2023 - 2025',
      description: [
        'Worked under Global Ad Technology Supervisory Department to manage Ad Item Master, a key service which stores, delivers, tracks and reports highly critical, revenue-generating ads for hundreds of millions of Rakuten Group\'s Ichiba app users as well as merchants, one of Japan\'s largest online retail marketplaces',
        'Administered highly available Couchbase Enterprise clusters and Hive data warehouses acting as key sources of 500 million ad items, shops and campaigns across different data centers to enable real-time ad delivery as well as analytical and reporting capabilities for all downstream ad users',
        'Developed and maintained highly scalable, low-latency, cached, containerised and load-balanced backend systems and APIs on top of Couchbase and Redis clusters using Spring Framework, Kubernetes, Kafka and Hive to serve super targeted ads and accurately track user clicks and impressions for merchant charging'
      ],
    },
    {
      title: 'Data Engineer',
      company: 'Sea Limited',
      period: '2021 - 2023',
      description: [
        'Worked under Data Platform team to develop batch and real-time data ingestion pipelines to support downstream Finance users in data modelling and financial reporting for Garena, Sea Group\'s gaming arm',
        'Built a fully automated, user-centric and web-based data ingestion portal for non-technical Finance users to ingest data from various sources of their needs such as relational databases, Google Sheets, CSV and Kafka into HDFS, hence removed the need for manual ticket requests and significantly boosted productivity',
        'Performed daily on-call duties to monitor hundreds of Terabyte-scale batch and streaming ingestion jobs from major games such as Free Fire, Call of Duty or Undawn using Bash and PySpark'
      ],
    },
  ]

  return (
    <Box
      id="experience"
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
            Professional Experience
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
            Professional Experience
          </Heading>
        </VStack>
        <Box position="relative" maxW="1000px" mx="auto">
          {/* Center Timeline Line */}
          <Box
            position="absolute"
            left="50%"
            top={0}
            bottom={0}
            w="4px"
            transform="translateX(-50%)"
            bgGradient="linear(180deg, #667eea 0%, #764ba2 100%)"
            borderRadius="full"
            boxShadow="0 0 10px rgba(102, 126, 234, 0.3)"
            display={{ base: 'none', md: 'block' }}
          />
          
          <VStack align="stretch" gap={10}>
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              return (
                <Box
                  key={index}
                  position="relative"
                  display="flex"
                  alignItems="center"
                  flexDirection={{ base: 'column', md: isEven ? 'row' : 'row-reverse' }}
                  gap={{ base: 4, md: 6 }}
                >
                  {/* Card */}
                  <Box
                    flex={{ base: '1', md: '1' }}
                    maxW={{ base: '100%', md: '45%' }}
                    bg="white"
                    p={{ base: 6, md: 8 }}
                    borderRadius="xl"
                    boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                    border="1px solid"
                    borderColor="gray.100"
                    _hover={{
                      transform: { base: 'translateY(-4px)', md: isEven ? 'translateX(-8px)' : 'translateX(8px)' },
                      boxShadow: '0 8px 30px rgba(102, 126, 234, 0.15)',
                      borderColor: 'purple.200',
                    }}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    <HStack mb={3} flexWrap="wrap" gap={2}>
                      <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight={700} color="gray.900">
                        {exp.title}
                      </Heading>
                      <Badge
                        bgGradient="linear(135deg, #667eea, #764ba2)"
                        color="blue"
                        backgroundColor="gray.100"
                        px={4}
                        py={1.5}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight={700}
                        boxShadow="0 4px 12px rgba(102, 126, 234, 0.4)"
                        letterSpacing="wide"
                      >
                        {exp.period}
                      </Badge>
                    </HStack>
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="purple.700" mb={4} fontWeight={600}>
                    {exp.company}
                  </Text>
                  <VStack align="stretch" gap={3} mt={4}>
                    {exp.description?.map((item, i) => (
                      <Box
                        key={i}
                        color="gray.800"
                        pl={6}
                        position="relative"
                        fontSize={{ base: 'sm', md: 'md' }}
                        lineHeight="tall"
                        fontWeight={500}
                      >
                          <Box
                            as="span"
                            position="absolute"
                            left={0}
                            color="purple.500"
                            fontWeight="bold"
                            fontSize="lg"
                          >
                            •
                          </Box>
                          {item}
                        </Box>
                      ))}
                    </VStack>
                  </Box>

                  {/* Timeline Dot */}
                  <Box
                    position={{ base: 'relative', md: 'absolute' }}
                    left={{ base: 'auto', md: '50%' }}
                    transform={{ base: 'none', md: 'translateX(-50%)' }}
                    w={{ base: '24px', md: '32px' }}
                    h={{ base: '24px', md: '32px' }}
                    borderRadius="full"
                    bgGradient="linear(135deg, #667eea, #764ba2)"
                    border="5px solid white"
                    boxShadow="0 0 0 5px rgba(102, 126, 234, 0.3), 0 6px 20px rgba(102, 126, 234, 0.4)"
                    zIndex={2}
                    flexShrink={0}
                    display={{ base: 'none', md: 'block' }}
                  />

                  {/* Spacer for desktop */}
                  <Box flex={{ base: '0', md: '1' }} maxW={{ base: '0', md: '45%' }} display={{ base: 'none', md: 'block' }} />
                </Box>
              )
            })}
          </VStack>
        </Box>

        {/* Scroll Arrow */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="purple.600"
          _hover={{ color: 'purple.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => scrollToSection('awards')}
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

export default Experience

