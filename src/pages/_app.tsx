import { type AppType } from 'next/app'
import '~/styles/globals.css'
import Head from 'next/head'
import { ClerkProvider } from '@clerk/nextjs'
import { api } from '~/utils/api'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Novo projeto</title>
        <meta name="description" content="🐢" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
