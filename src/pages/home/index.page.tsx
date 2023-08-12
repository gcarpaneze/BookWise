import { CaretRight, ChartLineUp } from '@phosphor-icons/react'

import { Navbar } from '../../components/Navbar'
import TitleHeader from '../../components/TitleHeader'
import CardBook, { BookCardProps } from '../../components/CardBook'
import MiniCardBook, { BookMiniCardProps } from '../../components/MiniCardBook'

import {
  HomeContainer,
  HomeContent,
  SectionBooks,
  SectionPopularBooks,
} from './styles'
import { GetStaticProps } from 'next'
import { api } from '../../lib/axios'
import { useRouter } from 'next/router'

interface HomeProps {
  lastReviews: BookCardProps[]
  bestReviews: BookMiniCardProps[]
}

export default function Home({ lastReviews, bestReviews }: HomeProps) {
  const router = useRouter()

  return (
    <HomeContainer>
      <Navbar />
      <div>
        <TitleHeader description="Início">
          <ChartLineUp />
        </TitleHeader>

        <HomeContent>
          <SectionBooks>
            <h3>Avaliações mais recentes</h3>

            {lastReviews.map((lastReview) => {
              return <CardBook key={lastReview.id} data={lastReview} />
            })}
          </SectionBooks>

          <SectionPopularBooks>
            <header>
              <h3>Livros populares</h3>

              <button onClick={() => router.push('/explorer')}>
                Ver todos
                <CaretRight />
              </button>
            </header>

            <div>
              {bestReviews.map((book) => {
                return <MiniCardBook key={book.id} data={book} />
              })}
            </div>
          </SectionPopularBooks>
        </HomeContent>
      </div>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await api.get('/books/best-book-reviews')

  const { lastReviews, bestReviews } = res.data

  return {
    props: {
      lastReviews,
      bestReviews,
    },
  }
}
