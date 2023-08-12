import { Star, StarHalf } from '@phosphor-icons/react'

import { RatingContainer } from './styles'

interface RatingProps {
  rate: number
}

export default function Rating({ rate }: RatingProps) {
  return (
    <RatingContainer>
      <Star weight={rate >= 1 ? 'fill' : 'regular'} />
      <Star weight={rate >= 2 ? 'fill' : 'regular'} />
      <Star weight={rate >= 3 ? 'fill' : 'regular'} />
      <Star weight={rate >= 4 ? 'fill' : 'regular'} />
      <Star weight={rate >= 5 ? 'fill' : 'regular'} />
    </RatingContainer>
  )
}
