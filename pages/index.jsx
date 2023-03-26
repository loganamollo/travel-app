import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Login from '@/components/user/Login'
import Notification from '@/components/Notification'
import Loading from '@/components/user/Loading'


export default function Home() {
  return (
    <>
      <Head>
        <title>Travel App</title>
        <meta name="description" content="Next JS travel application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Loading />
        <Notification />
        <Login />
        <NavBar />
        <h1>Travel App</h1>
      </main>
    </>
  )
}
