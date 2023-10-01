import { useCallback, useState } from 'react'
import { GetStaticProps } from 'next'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'

import { api } from '../../lib/axios'

import { Navbar } from '../../components/Navbar'
import TitleHeader from '../../components/TitleHeader'
import MiniCardBook, { BookMiniCardProps } from '../../components/MiniCardBook'

import {
  FilterTagButton,
  FiltersTagsContainer,
  HomeContainer,
  HomeContent,
  InputFind,
} from './styles'
import { NextSeo } from 'next-seo'

const schema = z.object({
  search: z.string().min(3),
})

type SearchProps = z.infer<typeof schema>

interface CategorieProps {
  id: string
  name: string
  active?: boolean
}

interface HomeProps {
  books: BookMiniCardProps[]
  categories: CategorieProps[]
}

export default function Explorer({ categories, books }: HomeProps) {
  const [btnCategories, setBtnCategories] =
    useState<CategorieProps[]>(categories)
  const [cardBooks, setCardBooks] = useState<BookMiniCardProps[]>(books)

  const { register, handleSubmit } = useForm<SearchProps>({
    resolver: zodResolver(schema),
  })

  async function handleSearchByAuthorOrName(data: SearchProps) {
    try {
      const { search } = data
      const res = await api.get(`/books/search-by-author-or-name/${search}`)

      const { books } = res.data

      setCardBooks(books)
    } catch (error) {
      return
    }

    const newFilterSelectionTag = btnCategories.map((currCategory) => {
      return {
        ...currCategory,
        active: false,
      }
    })

    setBtnCategories(newFilterSelectionTag)
  }

  const handleFilterByCategory = useCallback(
    async (categoryId: string) => {
      try {
        const res = await api.get(`/books/filtered-by-category/${categoryId}`)

        const { books } = res.data

        setCardBooks(books)
      } catch (error) {
        return
      }

      const newFilterSelectionTag = btnCategories.map((currCategory) => {
        if (currCategory.id === categoryId) {
          return {
            ...currCategory,
            active: true,
          }
        } else {
          return {
            ...currCategory,
            active: false,
          }
        }
      })

      setBtnCategories(newFilterSelectionTag)
    },
    [btnCategories],
  )

  return (
    <>
      <NextSeo title="Book Wise | Explore nossos livros" />

      <HomeContainer>
        <Navbar page="explorer" />
        <div>
          <header>
            <TitleHeader description="Explorar">
              <Binoculars />
            </TitleHeader>

            <InputFind onSubmit={handleSubmit(handleSearchByAuthorOrName)}>
              <input
                placeholder="Buscar livro ou autor"
                {...register('search')}
              />
              <button title="search" type="submit">
                <MagnifyingGlass />
              </button>
            </InputFind>
          </header>

          <FiltersTagsContainer>
            {btnCategories.map((categorie) => {
              return (
                <FilterTagButton
                  key={categorie.id}
                  selected={categorie.active}
                  onClick={() => handleFilterByCategory(categorie.id)}
                >
                  {categorie.name}
                </FilterTagButton>
              )
            })}
          </FiltersTagsContainer>

          <HomeContent>
            {cardBooks.map((book) => {
              return <MiniCardBook data={book} key={book.id} />
            })}
          </HomeContent>
        </div>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await api.get('/books/filtered-by-category/all')
  const resCategories = await api.get('/categories/all-categories')

  const { books } = res.data

  const categories = resCategories.data.categories.map(
    (category: CategorieProps) => {
      return {
        id: category.id,
        name: category.name,
        active: false,
      }
    },
  )

  return {
    props: {
      books,
      categories: [{ id: 'all', name: 'Tudo', active: true }, ...categories],
    },
  }
}
