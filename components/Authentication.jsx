import React from 'react'

const Authentication = () => {
    return (
        <div className='border-t-[4px] border-[1px] mt-[120px] bg-slate-100 mb-5 p-4 border-sky-500 w-[400px] h-fit rounded-xl'>
            <div className='p-1 flex flex-col gap-1'>
                <h1 className='text-[14px] font-bold'>1. Authentication</h1>
                <div className='px-5 border-[1px] border-slate-900 rounded-lg'>
                    <h1 className='text-[14px] font-semibold'>
                        <span>- Register :</span>
                        <span className='font-normal italic text-[13px] ml-1'>
                            Base Url /register-user
                        </span>
                    </h1>
                    <div className='mb-2'>
                        <h1 className='text-[13px] font-semibold'>Method : POST</h1>
                        <h1 className='text-[13px] font-semibold'>Body :</h1>
                        <ul className='px-4 text-[13px]'>
                            <li>name : String</li>
                            <li>email : String</li>
                            <li>phone : String</li>
                            <li>password : String</li>
                            <li>image_url : String</li>
                            <li>address : String</li>
                        </ul>
                    </div>
                </div>

                {/* login */}
                <div className='px-5 border-[1px] border-slate-900 rounded-lg'>
                    <h1 className='text-[14px] font-semibold'>
                        <span>- Login :</span>
                        <span className='font-normal italic text-[13px] ml-1'>
                            Base Url /login-user
                        </span>
                    </h1>
                    <div className='mb-2'>
                        <h1 className='text-[13px] font-semibold'>Method : POST</h1>
                        <h1 className='text-[13px] font-semibold'>Body :</h1>
                        <ul className='px-4 text-[13px]'>
                            <li>email : String</li>
                            <li>password : String</li>
                        </ul>
                    </div>
                </div>

                {/* logout */}
                <div className='px-5 border-[1px] border-slate-900 rounded-lg'>
                    <h1 className='text-[14px] font-semibold'>
                        <span>- Logout :</span>
                        <span className='font-normal italic text-[13px] ml-1'>
                            Base Url /logout-user
                        </span>
                    </h1>
                    <div className='mb-2'>
                        <h1 className='text-[13px] font-semibold'>Method : POST</h1>
                        <h1 className='text-[13px] font-semibold'>Header : Bearer "token" </h1>
                    </div>
                </div>

                {/* me */}
                <div className='px-5 border-[1px] border-slate-900 rounded-lg'>
                    <h1 className='text-[14px] font-semibold'>
                        <span>- User Information :</span>
                        <span className='font-normal italic text-[13px] ml-1'>
                            Base Url /me
                        </span>
                    </h1>
                    <div className='mb-2'>
                        <h1 className='text-[13px] font-semibold'>Method : GET</h1>
                        <h1 className='text-[13px] font-semibold'>Header : Bearer "token" </h1>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Authentication