import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {getCsrfToken,useSession} from 'next-auth/react'

const Home: NextPage = () => {
  const {data: session, status} = useSession();
  
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>اینستاگرام</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>gdfhdf</p>
    </div>
  )
}

export default Home