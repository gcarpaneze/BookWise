import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.end()
  }

  const lastReviews = await prisma.rating.findMany({
    select: {
      id: true,
      rate: true,
      created_at: true,
      description: true,
      user: {
        select: {
          id: true,
          name: true,
          avatar_url: true,
        },
      },
      book: {
        select: {
          id: true,
          name: true,
          author: true,
          cover_url: true,
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
    take: 3,
  })

  const data = await prisma.book.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              avatar_url: true,
            },
          },
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  })

  const bestReviews = data
    .map((book) => {
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
              avatarUrl: review.user.avatar_url,
            },
          }
        }),
      }
    })
    .sort(function (a, b) {
      return b.averageRating - a.averageRating
    })
    .slice(0, 4)

  return res.status(200).json({ lastReviews, bestReviews })
}
