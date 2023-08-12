import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/globalStyles'
import { SessionProvider } from 'next-auth/react'
import { Nunito } from '@next/font/google'

globalStyles()

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={nunito.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
