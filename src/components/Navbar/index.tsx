import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'

import {
  SidebarContainer,
  Menu,
  ButtonOptionMenu,
  MarkItem,
  AreaUserAcess,
  ButtonLogin,
} from './styles'

import Logo from '../../assets/logos_book-wise-icon.svg'
import { useState } from 'react'
import { LoginDialogPortal } from '../LoginDialog'

interface NavBarProps {
  page: string
}

export function Navbar({ page }: NavBarProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const { data: session, status } = useSession()

  async function handleAddRating() {
    if (open === true) {
      setOpen(false)
      return
    }

    if (status !== 'authenticated') {
      setOpen(true)
    }
  }

  return (
    <SidebarContainer>
      <Image src={Logo} alt="" />

      <Menu>
        <ButtonOptionMenu
          onClick={() => router.push('/home')}
          selectedItem={page === 'home' && true}
        >
          <MarkItem selectedItem={page === 'home' && true} />
          <ChartLineUp />
          <span>Início</span>
        </ButtonOptionMenu>

        <ButtonOptionMenu
          onClick={() => router.push('/explorer')}
          selectedItem={page === 'explorer' && true}
        >
          <MarkItem selectedItem={page === 'explorer' && true} />
          <Binoculars />
          <span>Explorar</span>
        </ButtonOptionMenu>

        {session?.user && (
          <ButtonOptionMenu
            onClick={() => router.push('/profile')}
            selectedItem={page === 'profile' && true}
          >
            <MarkItem selectedItem={page === 'profile' && true} />
            <User />
            <span>Perfil</span>
          </ButtonOptionMenu>
        )}
      </Menu>

      {session?.user ? (
        <AreaUserAcess>
          <Image
            src={session?.user.image ?? ''}
            alt="Avatar"
            width={40}
            height={40}
          />

          <h3>{session?.user.name}</h3>

          <ButtonLogin
            onClick={() =>
              signOut({
                callbackUrl: `http://localhost:3000/register`,
                redirect: false,
              })
            }
          >
            <SignOut color="#F75A68" />
          </ButtonLogin>
        </AreaUserAcess>
      ) : (
        <AreaUserAcess>
          <Dialog.Root onOpenChange={handleAddRating} open={open}>
            <Dialog.Trigger asChild>
              <ButtonLogin>
                <span>Fazer login</span>
                <SignIn color="#50B2C0" />
              </ButtonLogin>
            </Dialog.Trigger>

            <LoginDialogPortal />
          </Dialog.Root>
        </AreaUserAcess>
      )}
    </SidebarContainer>
  )
}
