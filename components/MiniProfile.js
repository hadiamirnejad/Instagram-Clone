import { signOut , useSession } from 'next-auth/react'
import React from 'react'

function MiniProfile() {
  const {data: session} = useSession();
  return (
    <div className='flex items-center justify-between mt-14 ml-10 mr-4'>
      <button onClick={()=>signOut()} className='text-blue-400 text-sm font-semibold'>خروج</button>
      <div className='flex-1 mx-4' dir='rtl'>
        <h2 className='font-bold'>{session?.user?.name}</h2>
        <h3 className='text-sm text-gray-400'>به سایت ... خوش آمدید.</h3>
      </div>
      <img className='w-16 h-16 rounded-full border p-[12px]' src={session?.user?.image}/>
    </div>
  )
}

export default MiniProfile