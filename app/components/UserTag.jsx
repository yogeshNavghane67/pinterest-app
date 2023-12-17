"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';

function UserTag({user}) {
    const {data:session}=useSession();
  return (
    <div className='mt-8'>
       {session?
       <div className='flex gap-3 
       items-center'>
       <Image src={session?.user.image} 
       alt='userImage'
       width={45}
       height={45}
       className='rounded-full'/>
       <div>
        <h2 className='text-[14px] font-medium'>{session.user.name}</h2>
        <h2 className='text-[12px]'>{session.user.email}</h2>

        </div>
       </div>
       :null}
    </div>
  )
}

export default UserTag
