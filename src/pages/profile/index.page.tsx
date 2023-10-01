import Image from 'next/image'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  User,
  UserList,
} from '@phosphor-icons/react'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth].api'
import { getYear } from 'date-fns'

import { api } from '../../lib/axios'

import { Navbar } from '../../components/Navbar'
import TitleHeader from '../../components/TitleHeader'
import CardBookProfile, { CardBookProfileProps } from './CardBookProfile'

import {
  ItemUserInfo,
  ProfileContainer,
  ProfileContent,
  SectionBookReviews,
  SectionUserInfos,
} from './styles'
import { NextSeo } from 'next-seo'

interface ProfileProps {
  sumaryUserInfo: {
    id: string
    name: string
    image: string
    created_at: string
    totalPages: number
    totalBooksReviews: number
    totalAuthorsReviews: number
    categoryMostRead: string
  }
  reviewBooksUserRead: CardBookProfileProps[]
}

export default function Profile({
  sumaryUserInfo,
  reviewBooksUserRead,
}: ProfileProps) {
  return (
    <>
      <NextSeo title="Book Wise | Perfil" noindex />

      <ProfileContainer>
        <Navbar page="profile" />
        <div>
          <TitleHeader description="Usuário">
            <User />
          </TitleHeader>

          <ProfileContent>
            <SectionBookReviews>
              {reviewBooksUserRead.map((review) => {
                return <CardBookProfile key={review.id} data={review} />
              })}
            </SectionBookReviews>

            <SectionUserInfos>
              <Image
                src={sumaryUserInfo.image}
                alt="Avatar"
                width={72}
                height={72}
              />

              <h3>{sumaryUserInfo.name}</h3>
              <h4>
                Membro desde {getYear(new Date(sumaryUserInfo.created_at))}
              </h4>

              <span />

              <div>
                <ItemUserInfo>
                  <BookOpen />
                  <div>
                    <strong>{sumaryUserInfo.totalPages}</strong>
                    <p>Páginas Lidas</p>
                  </div>
                </ItemUserInfo>

                <ItemUserInfo>
                  <Books />
                  <div>
                    <strong>{sumaryUserInfo.totalBooksReviews}</strong>
                    <p>Livros avaliados</p>
                  </div>
                </ItemUserInfo>

                <ItemUserInfo>
                  <UserList />
                  <div>
                    <strong>{sumaryUserInfo.totalAuthorsReviews}</strong>
                    <p>Autores lidos</p>
                  </div>
                </ItemUserInfo>

                <ItemUserInfo>
                  <BookmarkSimple />
                  <div>
                    <strong>{sumaryUserInfo.categoryMostRead}</strong>
                    <p>Categoria mais lida</p>
                  </div>
                </ItemUserInfo>
              </div>
            </SectionUserInfos>
          </ProfileContent>
        </div>
      </ProfileContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/register',
        permanent: false,
      },
    }
  }

  const res = await api.get(`/users/find-user-info/${session?.user?.email}`)

  const { sumaryUserInfo, reviewBooksUserRead } = res.data.userInfo

  return {
    props: {
      sumaryUserInfo,
      reviewBooksUserRead,
    },
  }
}
