import Image from 'next/image'
import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import Rating from '../Rating'

import { CardContainer, CardHeader, CardContent } from './styles'

export interface BookCardProps {
  id: string
  rate: number
  created_at: string
  description: string
  user: {
    id: string
    name: string
    image: string
  }
  book: {
    id: string
    name: string
    author: string
    cover_url: string
  }
}

interface CardProps {
  data: BookCardProps
}

export default function CardBook({ data }: CardProps) {
  const formatDate = formatDistanceToNow(new Date(data.created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <CardContainer>
      <CardHeader>
        <Image src={data?.user?.image} alt="Avatar" width={40} height={40} />

        <div>
          <h3>{data?.user?.name}</h3>
          <p>{formatDate}</p>
        </div>

        <span>
          <Rating rate={data?.rate} />
        </span>
      </CardHeader>

      <CardContent>
        <Image
          src={data?.book?.cover_url}
          alt={data?.book?.name}
          width={40}
          height={108}
          quality={100}
          style={{ objectFit: 'cover' }}
        />

        <div>
          <h3>{data?.book?.name}</h3>
          <h4>{data?.book?.author}</h4>
          <p>{data?.description}</p>
        </div>
      </CardContent>
    </CardContainer>
  )
}
