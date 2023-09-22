import { Star } from '@phosphor-icons/react'

import { RatingContainer, ButtonStar } from './styles'
import { useState } from 'react'

interface RatingProps {
  rate: number
  editable?: boolean
}

export default function Rating({ rate, editable }: RatingProps) {
  const [numberStars, setNumberStars] = useState(rate)

  function handleAvailiableStars(newRate: number) {
    if (editable) {
      setNumberStars(newRate)
    }
  }

  return (
    <RatingContainer>
      <ButtonStar
        onClick={() => handleAvailiableStars(1)}
        editable={!!editable}
      >
        <Star weight={numberStars >= 1 ? 'fill' : 'regular'} />
      </ButtonStar>

      <ButtonStar
        onClick={() => handleAvailiableStars(2)}
        editable={!!editable}
      >
        <Star weight={numberStars >= 2 ? 'fill' : 'regular'} />
      </ButtonStar>

      <ButtonStar
        onClick={() => handleAvailiableStars(3)}
        editable={!!editable}
      >
        <Star weight={numberStars >= 3 ? 'fill' : 'regular'} />
      </ButtonStar>

      <ButtonStar
        onClick={() => handleAvailiableStars(4)}
        editable={!!editable}
      >
        <Star weight={numberStars >= 4 ? 'fill' : 'regular'} />
      </ButtonStar>

      <ButtonStar
        onClick={() => handleAvailiableStars(5)}
        editable={!!editable}
      >
        <Star weight={numberStars >= 5 ? 'fill' : 'regular'} />
      </ButtonStar>
    </RatingContainer>
  )
}
