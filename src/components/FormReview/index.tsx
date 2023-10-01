import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Star, X } from '@phosphor-icons/react'

import { FormContainer, FormHeader, Button, ButtonStar } from './styles'

import { api } from '../../lib/axios'
import { ReviewCardProps } from '../CardReview'
import { toast } from 'react-toastify'

interface FormReviewProps {
  session: {
    name: string
    image: string
    email: string
  }
  closeAvailableMode: () => void
  addNewReview: (review: ReviewCardProps) => void
  bookId: string
}

const schema = z.object({
  rate: z.coerce.number(),
  description: z.string(),
})

type FormProps = z.infer<typeof schema>

export function FormReview({
  session,
  closeAvailableMode,
  addNewReview,
  bookId,
}: FormReviewProps) {
  const [numberStars, setNumberStars] = useState(0)

  const { register, handleSubmit } = useForm<FormProps>({
    resolver: zodResolver(schema),
  })

  async function handleSubmitRate(data: FormProps) {
    if (!data.rate || !data.description) {
      toast.warning(
        'Avalie de 1 a 5 estrelas e deixe um comentário sobre o livro.',
      )
      return
    }

    try {
      const res = await api.post(`/rates/add-rating`, {
        data: {
          ...data,
          email: session.email,
          bookId,
        },
      })

      const newRate = {
        id: res.data.id,
        rate: res.data.rate,
        description: res.data.description,
        createdAt: res.data.created_at,
        user: {
          id: res.data.user_id,
          name: session.name,
          avatarUrl: session.image,
        },
      }

      addNewReview(newRate)

      closeAvailableMode()
    } catch (error) {
      if (
        error.response.data.error === 'This user has already rated this book'
      ) {
        toast.error('Usuário já fez a avaliação desse livro.')
        closeAvailableMode()
      } else {
        toast.error('Erro ao salvar comentário.')
      }
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitRate)}>
      <FormHeader>
        <Image src={session.image ?? ''} alt="Avatar" width={40} height={40} />

        <h3>{session?.name}</h3>

        <div>
          <ButtonStar onClick={() => setNumberStars(1)}>
            <Star weight={numberStars >= 1 ? 'fill' : 'regular'} />
            <input
              type="radio"
              value={1}
              {...register('rate')}
              style={{ visibility: 'hidden' }}
            />
          </ButtonStar>

          <ButtonStar onClick={() => setNumberStars(2)}>
            <Star weight={numberStars >= 2 ? 'fill' : 'regular'} />
            <input
              type="radio"
              value={2}
              {...register('rate')}
              style={{ visibility: 'hidden' }}
            />
          </ButtonStar>

          <ButtonStar onClick={() => setNumberStars(3)}>
            <Star weight={numberStars >= 3 ? 'fill' : 'regular'} />
            <input
              type="radio"
              value={3}
              {...register('rate')}
              style={{ visibility: 'hidden' }}
            />
          </ButtonStar>

          <ButtonStar onClick={() => setNumberStars(4)}>
            <Star weight={numberStars >= 4 ? 'fill' : 'regular'} />
            <input
              type="radio"
              value={4}
              {...register('rate')}
              style={{ visibility: 'hidden' }}
            />
          </ButtonStar>

          <ButtonStar onClick={() => setNumberStars(5)}>
            <Star weight={numberStars >= 5 ? 'fill' : 'regular'} />
            <input
              type="radio"
              value={5}
              {...register('rate')}
              style={{ visibility: 'hidden' }}
            />
          </ButtonStar>
        </div>
      </FormHeader>

      <textarea maxLength={256} {...register('description')} />
      <div>
        <Button fontColor="cancel" type="button" onClick={closeAvailableMode}>
          <X />
        </Button>

        <Button fontColor="submit" type="submit">
          <Check />
        </Button>
      </div>
    </FormContainer>
  )
}
