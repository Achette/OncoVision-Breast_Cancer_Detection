import { Header } from '@/components'
import { Box } from '@chakra-ui/react'

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box as="section">
      <Header />
      {children}
    </Box>
  )
}
