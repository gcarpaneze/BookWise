import Image from 'next/image'
import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import Rating from '../Rating'

import { CardContainer, CardHeader, CardContent } from './styles'

export interface ReviewCardProps {
  id: string
  rate: number
  description: string
  createdAt: string
  user: {
    id: string
    name: string
    avatarUrl: string
  }
}

interface CardReviewProps {
  data: ReviewCardProps
}

export default function CardReview({ data }: CardReviewProps) {
  const formatDate = formatDistanceToNow(new Date(data.createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <CardContainer>
      <CardHeader>
        <Image
          src={data?.user?.avatarUrl}
          alt="Avatar"
          width={40}
          height={40}
        />

        <div>
          <h3>{data?.user?.name}</h3>
          <p>{formatDate}</p>
        </div>

        <span>
          <Rating rate={data?.rate} />
        </span>
      </CardHeader>

      <CardContent>
        <p>{data?.description}</p>
      </CardContent>
    </CardContainer>
  )
}
