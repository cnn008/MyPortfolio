import { Box, Heading, Text, VStack, Badge, Flex } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function ExtracurricularActivities() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  
  const activities = [
    {
      title: 'HSGS Code Camp',
      period: '2024-2025',
      roles: [
        {
          role: 'Lead Tutor (2024)',
          description: 'Taught C++ fundamentals to middle school beginners. Designed curriculum, conducted lessons, and integrated interactive learning elements such as quizzes to build up computational thinking and break down challenging concepts into intuitive, bite-sized lessons.',
        },
        {
          role: 'Manager (2025)',
          description: 'Led overall operations, managed schedules, and coordinated core activities to ensure a smooth learning experience for all participants',
        },
        {
          role: 'Head of Examination Committee (2025)',
          description: 'Oversaw the design and quality assurance of midterm and final exams, ensuring content effectively evaluates students\' ability to design, implement, and debug a complete C++ programme.',
        },
      ],
    },
    {
      title: 'Busy Bee Friends Volunteer Group',
      period: '06/2024',
      roles: [
        {
          role: 'Volunteer',
          description: 'Fundraised and supported the construction of Hanh Dich primary and secondary school in Que Phong District, Nghe An Province to provide education opportunities for local children from disadvantaged backgrounds',
        },
      ],
    },
    {
      title: 'Teacher Assistant - CMATH Education Center',
      period: '1/2024 - 12/2024',
      roles: [
        {
          role: 'Academic Support',
          description: 'Assisted in delivering advanced Math lessons for secondary students, clarifying complex algebraic and geometric concepts to ensure thorough understanding.',
        },
        {
          role: 'Assessment & Feedback',
          description: 'Graded weekly practice tests and provided personalized feedback to help students identify their weaknesses and improve their exam-taking strategies.',
        },
      ],
    },
  ]

  return (
    <Box
      id="extracurricular"
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
            🌟 Extracurricular Activities
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
            Extracurricular Activities
          </Heading>
        </VStack>
        
        <VStack align="stretch" gap={8}>
          {activities.map((activity, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="3xl"
              p={{ base: 6, md: 8 }}
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
              border="2px solid"
              borderColor="indigo.100"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 16px 48px rgba(99, 102, 241, 0.2)',
                borderColor: 'indigo.300',
              }}
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              {/* Decorative gradient top border */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="6px"
                bgGradient="linear(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)"
              />
              
              <VStack align="stretch" gap={6}>
                {/* Header */}
                <Flex 
                  direction={{ base: 'column', md: 'row' }} 
                  justify="space-between" 
                  align={{ base: 'flex-start', md: 'center' }}
                  gap={4}
                >
                  <Heading 
                    as="h3" 
                    fontSize={{ base: 'xl', md: '2xl' }} 
                    color="gray.900" 
                    fontWeight={800}
                  >
                    {activity.title}
                  </Heading>
                  <Badge
                    bg="indigo.100"
                    color="indigo.800"
                    border="1px solid"
                    borderColor="indigo.200"
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight={700}
                    boxShadow="0 4px 12px rgba(99, 102, 241, 0.2)"
                  >
                    {activity.period}
                  </Badge>
                </Flex>

                {/* Roles */}
                <VStack align="stretch" gap={4}>
                  {activity.roles.map((role, roleIndex) => (
                    <Box
                      key={roleIndex}
                      pl={6}
                      position="relative"
                      borderLeft="3px solid"
                      borderColor="indigo.200"
                    >
                      <Text
                        fontWeight={700}
                        color="indigo.700"
                        fontSize="md"
                        mb={2}
                      >
                        {role.role}
                      </Text>
                      <Text
                        color="gray.700"
                        lineHeight="tall"
                        fontSize="sm"
                        fontWeight={400}
                      >
                        {role.description}
                      </Text>
                    </Box>
                  ))}
                </VStack>
              </VStack>
            </Box>
          ))}
        </VStack>

        {/* Scroll Arrow */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="indigo.600"
          _hover={{ color: 'indigo.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => scrollToSection('hobbies')}
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

export default ExtracurricularActivities
