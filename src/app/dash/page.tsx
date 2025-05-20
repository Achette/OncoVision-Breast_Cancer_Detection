'use client'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { LuCirclePlus } from 'react-icons/lu'
import { Box, Button, Flex, Heading, Spinner, Text } from '@chakra-ui/react'
import { DashTable } from '@/components/table'
import { HistoryPayload } from '@/models'
import { AppServices } from '@/service/app-services'
import { AppDispatch } from '@/redux/store'
import { resetState } from '@/redux/reducer/predict'

export default function HomePage() {
  const router = useRouter()
  const [history, setHistory] = useState<HistoryPayload>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

   const dispatch = useDispatch<AppDispatch>()

  const getHistoryData = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await AppServices.getHistory()
      setHistory(response.data)
    } catch (error) {
      console.error('Erro ao buscar histórico:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getHistoryData()
  }, [getHistoryData])

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
          onClick={() => {
            dispatch(resetState())
            router.push('new-prediction')
          }}
        >
          <LuCirclePlus />
          <Text ml={2}>Nova Predição</Text>
        </Button>
      </Flex>

      {isLoading ? (
        <Flex justifyContent="center" alignItems="center" mt="12rem">
          <Spinner size="xl" color="dark" />
        </Flex>
      ) : history ? (
        <Box
          w="full"
          mt="2rem"
          overflowX="auto"
          border="2px solid #2d3748"
          borderRadius="0.5rem"
          maxH="calc(100vh - 16rem)"
          h="100%"
        >
          <DashTable history={history?.history} />
        </Box>
      ) : (
        <Text color="dark" textAlign="center" mt="12rem">
          Não há histórico de predições
        </Text>
      )}
    </Box>
  )
}
