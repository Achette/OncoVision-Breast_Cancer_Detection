import { DashTable } from '@/components/table'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { LuCirclePlus } from 'react-icons/lu'

export default function HomePage() {
  return (
    <Box w="full" p="2rem 8rem" maxH="calc(100vh - 8rem)">
      <Flex justifyContent="space-between">
        <Heading as="h3" color="dark" fontSize="1.5rem" fontWeight={700}>
          Histórico de Predições
        </Heading>

        <Button
          color="light"
          bgColor="darkSecondary"
          p="1rem 2rem"
          _hover={{ bgColor: 'secondary' }}
        >
          <LuCirclePlus />
          <Text ml={2}>Nova Predição</Text>
        </Button>
      </Flex>

      <Box w="full" mt="2rem" overflowX="auto">
        <DashTable />
      </Box>
    </Box>
  )
}
