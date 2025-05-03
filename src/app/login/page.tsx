import {
  Box,
  Heading,
  VStack,
  Field,
  Input,
  Button,
  HStack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Login() {
  return (
    <Box
      as="form"
      w="31.25rem"
      h="27.375rem"
      p="1.875rem"
      bgColor="light"
      borderRadius="1rem"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <VStack gap="1.5rem">
        <Heading as="h2" color="primary" fontSize="1.5rem" fontWeight={700}>
          Acesse sua conta
        </Heading>

        <Box w="full">
          <Field.Root required>
            <Field.Label color="dark" fontSize="1rem">
              E-mail <Field.RequiredIndicator />
            </Field.Label>
            <Input
              placeholder="Seu email"
              type="email"
              borderColor="input"
              color="secondary"
              pl="0.5rem"
            />
            <Field.HelperText></Field.HelperText>
          </Field.Root>
        </Box>

        <Box w="full">
          <Field.Root required>
            <Field.Label color="dark" fontSize="1rem">
              Senha <Field.RequiredIndicator />
            </Field.Label>
            <Input
              placeholder="Seu senha"
              type="password"
              borderColor="input"
              color="secondary"
              pl="0.5rem"
            />
            <Field.HelperText></Field.HelperText>
          </Field.Root>
        </Box>

        <HStack
          w="full"
          color="primary"
          justifyContent="flex-end"
          fontSize="0.875rem"
        >
          Esqueceu sua senha?
        </HStack>

        <Button
          w="full"
          bgColor="primary"
          color="light"
          type="submit"
          _hover={{ bgColor: 'primaryDark' }}
        >
          Entrar
        </Button>

        <Box>
          <Text color="dark">
            Não tem uma conta?{' '}
            <ChakraLink
              as={Link}
              href="/sign-up"
              color="primary"
              fontWeight={600}
              textDecor="none"
            >
              Cadastre-se
            </ChakraLink>
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}
