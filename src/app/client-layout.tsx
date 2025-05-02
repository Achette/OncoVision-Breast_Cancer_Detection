'use client'

import { usePathname } from 'next/navigation'
import { Flex } from '@chakra-ui/react'
import { Header } from '@/components'
import { Provider } from '@/components/ui/provider'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const hideHeader = ['/', '/login', '/sign-up'].includes(pathname)
  const hideBgColor = ['/home'].includes(pathname)

  return (
    <Provider>
      {!hideHeader && <Header />}
      <Flex
        bg={
          !hideBgColor
            ? 'linear-gradient(#e84c8835,rgba(194, 58, 108, 0.2))'
            : undefined
        }
        h="100vh"
        w="100%"
        overflowX="hidden"
        justifyContent={'center'}
        alignItems="center"
      >
        {children}
      </Flex>
    </Provider>
  )
}
