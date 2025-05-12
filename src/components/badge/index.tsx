import { Badge } from '@chakra-ui/react'

type BadgeProps = {
  result: string | number
}

export const ResultBadge = ({ result }: BadgeProps) => {
  return (
    <Badge
      fontSize="1rem"
      p="0.25rem"
      bg={result === 0 ? 'badgeBenign' : 'badgeMalignant'}
      color={result === 0 ? 'success' : 'error'}
      border={`1px solid ${result === 0 ? '#48bb78' : '#e53e3e'}`}
    >
      {result === 0 ? 'Benigno' : 'Maligno'}
    </Badge>
  )
}
