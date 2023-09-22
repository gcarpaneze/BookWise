import Image from 'next/image'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import Rating from '../Rating'

import { CardContentTrigger } from './styles'

import { DetailsBookDialog } from './DetailsBookDialog'

export interface BookMiniCardProps {
  id: string
  cover_url: string
  name: string
  author: string
  totalPages: string
  categories: {
    id: string
    name: string
  }[]
  averageRating: number
  ratings: {
    id: string
    rate: number
    description: string
    createdAt: string
    user: {
      id: string
      name: string
      avatarUrl: string
    }
  }[]
}

interface MiniCardProps {
  data: BookMiniCardProps
}

export default function MiniCardBook({ data }: MiniCardProps) {
  return (
    <Dialog.Root>
      <CardContentTrigger>
        <Image
          src={data?.cover_url}
          alt={data?.name}
          width={64}
          height={94}
          quality={100}
          style={{ objectFit: 'cover' }}
        />

        <div>
          <div>
            <h3>{data.name}</h3>
            <h4>{data.author}</h4>
          </div>

          <p>
            <Rating rate={data.averageRating} />
          </p>
        </div>
      </CardContentTrigger>

      <DetailsBookDialog data={data} />
    </Dialog.Root>
  )
}
