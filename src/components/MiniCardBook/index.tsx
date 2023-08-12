import Image from 'next/image'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'

import Rating from '../Rating'
import CardReview from '../CardReview'

import {
  CardContent,
  DialogContent,
  DialogOverlay,
  HeaderDialog,
  BookInformation,
  BookMoreInformation,
  Reviews,
} from './styles'

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
      <CardContent>
        <Image
          src={data?.cover_url}
          alt={data?.name}
          width={64}
          height={94}
          quality={100}
          style={{ objectFit: 'cover' }}
        />

        <div>
          <p>
            <h3>{data.name}</h3>
            <h4>{data.author}</h4>
          </p>

          <p>
            <Rating rate={data.averageRating} />
          </p>
        </div>
      </CardContent>

      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <HeaderDialog>
            <Dialog.Close>
              <X />
            </Dialog.Close>
          </HeaderDialog>

          <section>
            <BookInformation>
              <Image
                src={data?.cover_url}
                alt={data?.name}
                width={171}
                height={242}
                quality={100}
                style={{ objectFit: 'cover' }}
              />

              <div>
                <p>
                  <h3>{data.name}</h3>
                  <h4>{data.author}</h4>
                </p>

                <p>
                  <Rating rate={data.averageRating} />
                  <span>3 avaliações</span>
                </p>
              </div>
            </BookInformation>

            <BookMoreInformation>
              <div>
                <BookmarkSimple />
                <div>
                  <span>Categoria</span>
                  {data?.categories
                    .map((category) => {
                      return category.name
                    })
                    .toString()}
                </div>
              </div>

              <div>
                <BookOpen />
                <div>
                  <span>Páginas</span>
                  <strong>{data.totalPages}</strong>
                </div>
              </div>
            </BookMoreInformation>

            <header>
              <span>Avaliações</span>
              <button>Avaliar</button>
            </header>

            <Reviews>
              {data?.ratings?.map((review) => {
                return <CardReview key={review.id} data={review} />
              })}
            </Reviews>
          </section>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
