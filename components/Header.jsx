import React from 'react'

const Header = () => {
  return (
    <div className='fixed z-10 top-0 w-full bg-slate-700 text-white h-[100px] flex justify-center items-center'>
        <div className='flex flex-col text-center gap-2'>
        <h1 className='font-bold'>MY-Contact Rest API</h1>
        <h1 className='w-full text-[14px]'><span className='font-semibold'>Base Url :</span> <span className='italic'>https://my-contacts-apps.vercel.app/api</span>  </h1>
      </div>
    </div>
  )
}

export default Header