import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/globalStyles'
import { SessionProvider } from 'next-auth/react'
import { Nunito } from '@next/font/google'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className={nunito.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
