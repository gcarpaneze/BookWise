import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405)
  }

  const {
    data: { description, rate, email, bookId },
  } = req.body

  if (!email) {
    return res.status(400).json({ error: 'email not informed' })
  }

  if (!description || !rate) {
    return res.status(400).json({ error: 'description or rate not informed' })
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    return res.status(404).json({ error: 'e-mail not found' })
  }

  const userHasRateInThisBook = await prisma.rating.findFirst({
    where: {
      book_id: String(bookId),
      user_id: String(user.id),
    },
  })

  if (userHasRateInThisBook) {
    return res
      .status(400)
      .json({ error: 'This user has already rated this book' })
  }

  const newRate = await prisma.rating.create({
    data: {
      user: {
        connect: {
          id: user.id,
        },
      },
      book: {
        connect: {
          id: bookId,
        },
      },
      description,
      rate,
    },
  })

  return res.status(200).json(newRate)
}
