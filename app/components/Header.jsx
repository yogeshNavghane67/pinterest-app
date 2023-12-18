"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react"
import { doc, getFirestore, setDoc } from "firebase/firestore";
import app from '../Shared/firebaseConfig'
import { useRouter } from "next/navigation";



function Header() {
  const { data: session } = useSession();
  const router=useRouter();
  const db = getFirestore(app);

  //console.log(session);

  useEffect(()=>{
    saveUserInfo();
  },[session]);

  const saveUserInfo=async()=>{
    if(session?.user)
    {
      await setDoc(doc(db, "user", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image
      });
    }
  };

  const onCreateClick=()=>{
    if(session)
    {
      router.push('/pin-builder')
    }
    else{
      signIn()
    }
  }

  return (
    <div className="flex justify-between gap-3 md:gap-2 items-center p-6" >
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        onClick={()=>router.push('/')}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
      <button className="bg-black text-white p-2 px-4 rounded-full hidden md:block" onClick={()=>router.push('/')}>
        Home
      </button>
      <button className="font-semibold p-2 px-4 rounded-full text-[23px]" onClick={()=>onCreateClick()}>Create</button>
      <div className='bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex'>
        <IoSearchSharp className="text-[25px] text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-[25px] "
        />
      </div>
      <IoSearchSharp className="text-[25px] text-gray-500 md:hidden" />
      <FaBell className="text-[25px] md:text-[40px] text-gray-500 cursor-pointer" />
      <AiFillMessage className="text-[25px] md:text-[40px] text-gray-500 cursor-pointer" />
      {session?.user? <Image
        src={session.user.image}
        onClick={()=>router.push('/'+session.user.email)}
        alt="user-image"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />:
      <button className="font-semibold p-2 px-4 rounded-full text-[23px]" onClick={() => signIn()}>Login</button>}
    </div>
  );
}

export default Header;


