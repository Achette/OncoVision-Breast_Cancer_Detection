'use client'

import { Box, Button, Field, Flex, Heading, Input } from '@chakra-ui/react'

export const PredictionForm = () => {
  return (
    <Box
      mt="2rem"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      borderBottomLeftRadius="0.5rem"
      borderBottomRightRadius="0.5rem"
    >
      <Box
        w="full"
        bgColor="#eee"
        p="1rem"
        borderTopLeftRadius="0.5rem"
        borderTopRightRadius="0.5rem"
      >
        <Heading as="h4" color="dark" fontWeight={700} textAlign="start">
          Inserir dados do exame
        </Heading>
      </Box>
      <Box
        w="full"
        as="form"
        display="flex"
        flexDir="column"
        alignItems="center"
        gap="2rem"
        p="1rem"
      >
        <Box w="full">
          <Heading as="h4" color="neutral" fontWeight={600} textAlign="start">
            Características Médias
          </Heading>
        </Box>

        <Flex
          w="full"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap="2rem"
          mt="1rem"
        >
          <Box w="20rem">
            <Field.Root required>
              <Field.Label color="dark" fontSize="1rem">
                Área Média <Field.RequiredIndicator />
              </Field.Label>
              <Input
                placeholder="Área Média"
                type="text"
                borderColor="input"
                color="secondary"
                pl="0.5rem"
              />
              <Field.HelperText></Field.HelperText>
            </Field.Root>
          </Box>

          <Box w="20rem">
            <Field.Root required>
              <Field.Label color="dark" fontSize="1rem">
                Raio Médio <Field.RequiredIndicator />
              </Field.Label>
              <Input
                placeholder="Raio Médio"
                type="text"
                borderColor="input"
                color="secondary"
                pl="0.5rem"
              />
              <Field.HelperText></Field.HelperText>
            </Field.Root>
          </Box>

          <Box w="20rem">
            <Field.Root required>
              <Field.Label color="dark" fontSize="1rem">
                Textura Média <Field.RequiredIndicator />
              </Field.Label>
              <Input
                placeholder="Textura Média"
                type="text"
                borderColor="input"
                color="secondary"
                pl="0.5rem"
              />
              <Field.HelperText></Field.HelperText>
            </Field.Root>
          </Box>

          <Box w="20rem">
            <Field.Root required>
              <Field.Label color="dark" fontSize="1rem">
                Perímetro Médio <Field.RequiredIndicator />
              </Field.Label>
              <Input
                placeholder="Perímetro Médio"
                type="text"
                borderColor="input"
                color="secondary"
                pl="0.5rem"
              />
              <Field.HelperText></Field.HelperText>
            </Field.Root>
          </Box>

          <Box w="20rem">
            <Field.Root required>
              <Field.Label color="dark" fontSize="1rem">
                Suavidade Média <Field.RequiredIndicator />
              </Field.Label>
              <Input
                placeholder="Suavidade Média"
                type="text"
                borderColor="input"
                color="secondary"
                pl="0.5rem"
              />
              <Field.HelperText></Field.HelperText>
            </Field.Root>
          </Box>
        </Flex>

        <Button
          w="12rem"
          p="1rem 4rem"
          bg="neutral"
          color="light"
          type="submit"
          mb="1rem"
          _hover={{ bgColor: 'neutralDark' }}
        >
          Analisar
        </Button>
      </Box>
    </Box>
  )
}
