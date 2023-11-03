'use client'

import Link from 'next/link'
import React from 'react'
import {RiArrowTurnForwardLine} from 'react-icons/ri'
import {BsFiles} from 'react-icons/bs'
import { useRouter } from 'next/navigation'

const Footer = () => {
    const router = useRouter()
  return (
    <div  className=' w-[370px] mx-auto bg-sky-400 h-[70px] rounded-b-[50px] flex justify-around items-center'>
        <button><BsFiles size={30} className='hover:text-slate-300 text-sky-300/80'/></button>
        <Link href='/'  className='flex p-4 bg-sky-400/50 hover:bg-sky-300/50 shadow-xl border-[1px] border-white w-[60px] rounded-full'></Link>
        <button onClick={()=> router.back()}><RiArrowTurnForwardLine size={30} className='hover:text-slate-300 -rotate-90 text-sky-300/80'/></button>
    </div>
  )
}

export default Footer