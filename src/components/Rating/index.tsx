import { Star } from '@phosphor-icons/react'

import { RatingContainer, ButtonStar } from './styles'

interface RatingProps {
  rate: number
}

export default function Rating({ rate }: RatingProps) {
  return (
    <RatingContainer>
      <ButtonStar>
        <Star weight={rate >= 1 ? 'fill' : 'regular'} />
      </ButtonStar>

      <ButtonStar>
        <Star weight={rate >= 2 ? 'fill' : 'regular'} />
      </ButtonStar>

      <ButtonStar>
        <Star weight={rate >= 3 ? 'fill' : 'regular'} />
      </ButtonStar>

      <ButtonStar>
        <Star weight={rate >= 4 ? 'fill' : 'regular'} />
      </ButtonStar>

      <ButtonStar>
        <Star weight={rate >= 5 ? 'fill' : 'regular'} />
      </ButtonStar>
    </RatingContainer>
  )
}
