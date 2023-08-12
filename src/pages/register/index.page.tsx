import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { Button, RegisterContainer } from './styles'

import GithubIcon from '../../assets/logos_github-icon.svg'
import GoogleIcon from '../../assets/logos_google-icon.svg'
import VisitorIcon from '../../assets/logos_visitor-icon.svg'

import converImage from '../../assets/cover-app.svg'

export default function Register() {
  const router = useRouter()

  return (
    <RegisterContainer>
      <Image src={converImage} alt="Book Wise" />

      <div>
        <h1>Boas Vindas</h1>
        <h3>Faça seu login ou acesse como visitante</h3>

        <Button>
          <Image src={GoogleIcon} alt="" />
          <span>Entrar com Google</span>
        </Button>

        <Button onClick={async () => await signIn('github')}>
          <Image src={GithubIcon} alt="" />
          <span>Entrar com Github</span>
        </Button>

        <Button onClick={() => router.push('/home')}>
          <Image src={VisitorIcon} alt="" />
          <span>Entrar como visitante</span>
        </Button>
      </div>
    </RegisterContainer>
  )
}
