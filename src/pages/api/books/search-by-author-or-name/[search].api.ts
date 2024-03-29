import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.end()
  }

  const { search } = req.query

  const data = await prisma.book.findMany({
    where: {
      OR: [
        {
          author: {
            contains: String(search),
          },
        },
        {
          name: {
            contains: String(search),
          },
        },
      ],
    },
    include: {
      ratings: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
  })
  const books = data.map((book) => {
    return {
      id: book.id,
      cover_url: book.cover_url,
      name: book.name,
      author: book.author,
      totalPages: book.total_pages,
      categories: book.categories.map((category) => {
        return {
          id: category.category.id,
          name: category.category.name,
        }
      }),
      averageRating:
        book.ratings.reduce((acc, cur) => acc + cur.rate, 0) /
        book.ratings.length,
      ratings: book.ratings.map((review) => {
        return {
          id: review.id,
          rate: review.rate,
          description: review.description,
          createdAt: review.created_at,
          user: {
            id: review.user_id,
            name: review.user.name,
            avatarUrl: review.user.image,
          },
        }
      }),
    }
  })

  return res.status(200).json({ books })
}
