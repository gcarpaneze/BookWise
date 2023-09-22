import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'

import {
  DialogContent,
  DialogOverlay,
  HeaderDialog,
  BookInformation,
  BookMoreInformation,
  Reviews,
} from './styles'
import Rating from '../../Rating'
import { LoginDialogPortal } from '../../LoginDialog'
import CardReview from '../../CardReview'

import { BookMiniCardProps } from '../index'
import { FormReview } from '../../FormReview'

interface MiniCardProps {
  data: BookMiniCardProps
}

export function DetailsBookDialog({ data }: MiniCardProps) {
  const [open, setOpen] = useState(false)
  const [availableMode, setAvailableMode] = useState(false)

  const { data: session, status } = useSession()

  async function handleAddRating() {
    if (open === true) {
      setOpen(false)
      return
    }

    if (status !== 'authenticated') {
      setOpen(true)
      return
    }

    setAvailableMode(true)
  }

  return (
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
            <Dialog.Root open={open} onOpenChange={handleAddRating}>
              <Dialog.Trigger asChild>
                <button>Avaliar</button>
              </Dialog.Trigger>
              <LoginDialogPortal />
            </Dialog.Root>
          </header>

          <Reviews>
            {availableMode && (
              <FormReview
                session={session?.user}
                closeAvailableMode={() => setAvailableMode(false)}
              />
            )}

            {data?.ratings?.map((review) => {
              return <CardReview key={review.id} data={review} />
            })}
          </Reviews>
        </section>
      </DialogContent>
    </Dialog.Portal>
  )
}
