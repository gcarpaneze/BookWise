import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { X } from '@phosphor-icons/react'

import {
  DialogOverlay,
  DialogContent,
  HeaderDialog,
  DialogDescription,
  Button,
} from './styles'

import GithubIcon from '../../assets/logos_github-icon.svg'
import GoogleIcon from '../../assets/logos_google-icon.svg'

export function LoginDialogPortal() {
  async function handleSignIn(provider: string) {
    await signIn(provider, {
      redirect: false,
    })
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <HeaderDialog>
          <Dialog.Close>
            <X />
          </Dialog.Close>
        </HeaderDialog>
        <Dialog.Title></Dialog.Title>
        <DialogDescription>
          <h3>Faça login para deixar sua avaliação</h3>

          <Button>
            <Image src={GoogleIcon} alt="" />
            <span>Entrar com Google</span>
          </Button>

          <Button onClick={async () => await handleSignIn('github')}>
            <Image src={GithubIcon} alt="" />
            <span>Entrar com Github</span>
          </Button>
        </DialogDescription>
      </DialogContent>
    </Dialog.Portal>
  )
}
