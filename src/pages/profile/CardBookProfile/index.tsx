import Image from 'next/image'
import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import Rating from '../../../components/Rating'

import { CardContainer, CardHeader, CardContent } from './styles'

export interface CardBookProfileProps {
  id: string
  description: string
  rate: number
  created_at: string
  book: {
    id: string
    name: string
    author: string
    cover_url: string
  }
}

interface CardProps {
  data: CardBookProfileProps
}

export default function CardBookProfile({ data }: CardProps) {
  const formatDate = formatDistanceToNow(new Date(data.created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <CardContainer>
      <CardHeader>
        <div>
          <p>{formatDate}</p>
        </div>
      </CardHeader>

      <CardContent>
        <div>
          <Image
            src={data?.book?.cover_url}
            alt={data?.book?.name}
            width={98}
            height={134}
            quality={100}
            style={{ objectFit: 'cover' }}
          />

          <div>
            <h3>{data?.book?.name}</h3>
            <h4>{data?.book?.author}</h4>

            <span>
              <Rating rate={data?.rate} />
            </span>
          </div>
        </div>

        <p>{data?.description}</p>
      </CardContent>
    </CardContainer>
  )
}
