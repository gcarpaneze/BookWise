import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.end()
  }

  const { email } = req.query

  if (!email) {
    return res.end()
  }

  const data = await prisma.user.findUnique({
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
    where: {
      email: String(email),
    },
  })

  const totalPages = data?.ratings.reduce(
    (acc, cur) => acc + cur.book.total_pages,
    0,
  )

  const totalBooksReviews = data?.ratings.length

  const totalAuthorsReviews: string[] = []
  data?.ratings.forEach((review) => {
    if (
      totalAuthorsReviews.some((author) => author === review.book.author) ===
      false
    ) {
      totalAuthorsReviews.push(review.book.author)
    }
  })

  const userInfo = {
    sumaryUserInfo: {
      id: data?.id,
      name: data?.name,
      image: data?.image,
      created_at: data?.created_at,

      totalPages,
      totalBooksReviews,
      totalAuthorsReviews: totalAuthorsReviews.length,
      categoryMostRead: 'Ficção',
    },
    reviewBooksUserRead: data?.ratings.map((review) => {
      return {
        id: review.id,
        description: review.description,
        rate: review.rate,
        created_at: review.created_at,
        book: {
          id: review.book.id,
          name: review.book.name,
          author: review.book.author,
          cover_url: review.book.cover_url,
        },
      }
    }),
  }

  return res.status(200).json({ userInfo })
}
