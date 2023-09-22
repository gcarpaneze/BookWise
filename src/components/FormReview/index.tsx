import Image from 'next/image'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Rating from '../Rating'

import { FormContainer, FormHeader, Button } from './styles'
import { Check, X } from '@phosphor-icons/react'

interface FormReviewProps {
  session: {
    name: string
    image: string
    email: string
  }
  closeAvailableMode: () => void
}

const schema = z.object({
  rate: z.number().min(1).max(5),
  description: z.string(),
})

type FormProps = z.infer<typeof schema>

export function FormReview({ session, closeAvailableMode }: FormReviewProps) {
  const { register, handleSubmit } = useForm<FormProps>({
    resolver: zodResolver(schema),
  })

  function handleSubmitRate(data: FormProps) {
    console.log(data)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitRate)}>
      <FormHeader>
        <Image src={session.image ?? ''} alt="Avatar" width={40} height={40} />

        <h3>{session?.name}</h3>

        <span>
          <Rating rate={0} editable />
        </span>
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
