import {
  Box,
  Button,
  Field,
  Heading,
  Input,
  Text,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function SignUp() {
  return (
    <Box
      as="form"
      w="31.25rem"
      h="auto"
      p="1.875rem"
      bgColor="light"
      borderRadius="1rem"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <VStack gap="1rem">
        <Heading as="h2" color="primary" fontSize="1.5rem" fontWeight={700}>
          Crie uma nova conta
        </Heading>

        <Box w="full">
          <Field.Root required>
            <Field.Label color="dark" fontSize="1rem">
              Nome <Field.RequiredIndicator />
            </Field.Label>
            <Input
              placeholder="Nome"
              type="text"
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

        <Box w="full">
          <Field.Root required>
            <Field.Label color="dark" fontSize="1rem">
              Confirme sua senha <Field.RequiredIndicator />
            </Field.Label>
            <Input
              placeholder="Confirme sua senha"
              type="password"
              borderColor="input"
              color="secondary"
              pl="0.5rem"
            />
            <Field.HelperText></Field.HelperText>
          </Field.Root>
        </Box>

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
            Já tem uma conta?{' '}
            <ChakraLink
              as={Link}
              href="/login"
              color="primary"
              fontWeight={600}
              textDecor="none"
            >
              Entrar
            </ChakraLink>
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}
