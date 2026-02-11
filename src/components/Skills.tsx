import { Box, Heading, SimpleGrid, Badge, VStack, Flex } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Skills() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  // Color palette for badges
  const badgeColors = [
    { bg: 'purple.100', color: 'purple.700', hoverBg: 'purple.200' },
    { bg: 'blue.100', color: 'blue.700', hoverBg: 'blue.200' },
    { bg: 'cyan.100', color: 'cyan.700', hoverBg: 'cyan.200' },
    { bg: 'teal.100', color: 'teal.700', hoverBg: 'teal.200' },
    { bg: 'green.100', color: 'green.700', hoverBg: 'green.200' },
    { bg: 'yellow.100', color: 'yellow.700', hoverBg: 'yellow.200' },
    { bg: 'orange.100', color: 'orange.700', hoverBg: 'orange.200' },
    { bg: 'red.100', color: 'red.700', hoverBg: 'red.200' },
    { bg: 'pink.100', color: 'pink.700', hoverBg: 'pink.200' },
    { bg: 'indigo.100', color: 'indigo.700', hoverBg: 'indigo.200' },
  ]

  const getBadgeColor = (index: number) => {
    return badgeColors[index % badgeColors.length]
  }

  const skillCategories = [
    {
      category: 'Academic',
      skills: ['Ielts 8.0', 'ACT 35/36 (STEM)', 'SAT 800/800 (Chemistry)'],
    },
    {
      category: 'Professional',
      skills: ['Couchbase Associate Developer', 'Certified Kubernetes App Developer', 'GCP Cloud Enginnering', 'AWS Cloud Practitioner'],
    },
    {
      category: 'Data Engineering',
      skills: ['GCP', 'Hadoop', 'Hive', 'Spark', 'Kafka', 'MySQL', 'MongoDB', 'Couchbase', 'Redis', 'dbt', 'Iceberg', 'Debezium'],
    },
    {
      category: 'Data & ML',
      skills: ['SQL', 'Python', 'Java', 'Scala', 'Bash', 'Airflow', 'Spring Boot', 'GCP', 'AWS', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
    },
    {
      category: 'DevOps & MLOps',
      skills: ['Linux', 'Jenkins', 'Ansible', 'Docker', 'Kubernetes', 'Spring Cloud', 'ELK', 'Prometheus', 'Grafana', 'MLflow', 'Feature Store', 'Expectations'],
    }
  ]

  return (
    <Box
      id="skills"
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
            Technical Skills & Certifications
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
            Technical Skills & Certifications
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {skillCategories.map((category, index) => (
            <Box
              key={index}
              bg="white"
              p={8}
              borderRadius="2xl"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor="gray.100"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 30px rgba(102, 126, 234, 0.15)',
                borderColor: 'purple.200',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Heading
                as="h3"
                fontSize="lg"
                mb={6}
                color="gray.900"
                fontWeight={700}
                pb={3}
                borderBottom="2px solid"
                borderColor="purple.200"
              >
                {category.category}
              </Heading>
              <Flex
                gap={2}
                flexWrap="wrap"
                align="flex-start"
              >
                {category.skills.map((skill, i) => {
                  const colorScheme = getBadgeColor(i)
                  return (
                    <Badge
                      key={i}
                      bg={colorScheme.bg}
                      color={colorScheme.color}
                      px={2.5}
                      py={1}
                      borderRadius="md"
                      fontSize="xs"
                      fontWeight={600}
                      textTransform="none"
                      _hover={{
                        bg: colorScheme.hoverBg,
                        transform: 'translateY(-2px) scale(1.05)',
                      }}
                      transition="all 0.2s"
                    >
                      {skill}
                    </Badge>
                  )
                })}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>

        {/* Scroll Arrow - Optional, can scroll to contact or top */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="purple.600"
          _hover={{ color: 'purple.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => scrollToSection('contact')}
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

export default Skills

