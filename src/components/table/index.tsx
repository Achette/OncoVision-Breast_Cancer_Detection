import { Table, Flex } from '@chakra-ui/react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { ResultBadge } from '../badge'

export const DashTable = () => {
  return (
    <Table.Root overflow="auto">
      <Table.Header>
        <Table.Row bg="light" h="2rem" fontSize="1rem">
          <Table.ColumnHeader textAlign="center" color="dark">
            ID
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center" color="dark">
            Data
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center" color="dark">
            Raio Médio
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center" color="dark">
            Textura Média
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center" color="dark">
            Perímetro Médio
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center" color="dark">
            Resultado
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center" color="dark">
            Ações
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {/* Sempre itere a Table.Row - seguir a estrutura */}
        <Table.Row bg="light" h="2.5rem" fontSize="1rem">
          <Table.Cell textAlign="center" color="dark">
            1
          </Table.Cell>
          <Table.Cell textAlign="center" color="dark">
            2023-10-01
          </Table.Cell>
          <Table.Cell textAlign="center" color="dark">
            15.2
          </Table.Cell>
          <Table.Cell textAlign="center" color="dark">
            20.5
          </Table.Cell>
          <Table.Cell textAlign="center" color="dark">
            30.1
          </Table.Cell>
          <Table.Cell textAlign="center">
            <ResultBadge result={0} />
          </Table.Cell>
          <Table.Cell textAlign="center" color="error">
            <Flex justifyContent="center" fontSize="1.15rem">
              <RiDeleteBin6Line />
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row bg="light" h="2.5rem" fontSize="1rem">
          <Table.Cell textAlign="center" color="dark">
            2
          </Table.Cell>
          <Table.Cell textAlign="center" color="dark">
            2023-10-02
          </Table.Cell>
          <Table.Cell textAlign="center" color="dark">
            18.4
          </Table.Cell>
          <Table.Cell textAlign="center" color="dark">
            22.1
          </Table.Cell>
          <Table.Cell textAlign="center" color="dark">
            35.7
          </Table.Cell>
          <Table.Cell textAlign="center">
            <ResultBadge result={1} />
          </Table.Cell>
          <Table.Cell textAlign="center" color="error">
            <Flex justifyContent="center" fontSize="1.15rem">
              <RiDeleteBin6Line />
            </Flex>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}
