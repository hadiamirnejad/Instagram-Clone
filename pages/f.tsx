import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import {getCsrfToken,useSession} from 'next-auth/react'

const Home: NextPage = () => {
  const {data: session, status} = useSession();
  return (<>
      {status == 'loading' ? (
        <p>در حال دریافت اطلاعات</p>
      ):(
        <div className="h-screen overflow-y-scroll scrollbar-hide">
          <Head>
            <title>اینستاگرام</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          {session?(<p>وارد شده اید</p>):(<p>وارد نشده اید</p>)}
        </div>
      )}
    </>
  )
}

export default Home