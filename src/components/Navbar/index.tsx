import { useRouter } from 'next/navigation'
import { Binoculars, ChartLineUp, SignIn, User } from '@phosphor-icons/react'

import { SidebarContainer, Menu, ButtonOptionMenu, ButtonLogin } from './styles'

import Logo from '../../assets/logos_book-wise-icon.svg'
import Image from 'next/image'

export function Navbar() {
  const router = useRouter()

  return (
    <SidebarContainer>
      <Image src={Logo} alt="" />

      <Menu>
        <ButtonOptionMenu onClick={() => router.push('/home')}>
          <ChartLineUp />
          <span>Início</span>
        </ButtonOptionMenu>

        <ButtonOptionMenu onClick={() => router.push('/explorer')}>
          <Binoculars />
          <span>Explorar</span>
        </ButtonOptionMenu>

        <ButtonOptionMenu>
          <User />
          <span>Perfil</span>
        </ButtonOptionMenu>
      </Menu>

      <ButtonLogin>
        <span>Fazer login</span>
        <SignIn />
      </ButtonLogin>
    </SidebarContainer>
  )
}
