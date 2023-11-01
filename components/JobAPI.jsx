import React from 'react'

const JobAPI = () => {
    return (
        <div className='border-t-[4px] border-[1px] bg-slate-100 mb-5 p-4 border-sky-500 w-[400px] h-fit rounded-xl'>
            <div className='p-1 flex flex-col gap-1'>
                <h1 className='text-[14px] font-bold'>4. Jobs</h1>
                <div className='px-5 border-[1px] border-slate-900 rounded-lg'>
                    <h1 className='text-[14px] font-semibold'>
                        <span>- Create :</span>
                        <span className='font-normal italic text-[13px] ml-1'>
                            Base Url /contact/create-jobs?id=(contact._id)
                        </span>
                    </h1>
                    <div className='mb-2'>
                        <h1 className='text-[13px] font-semibold'>Method : POST</h1>
                        <h1 className='text-[13px] font-semibold'>Header : Bearer "token" </h1>
                        <h1 className='text-[13px] font-semibold'>Body :</h1>
                        <ul className='px-4 text-[13px]'>
                            <li>job_name : String</li>
                            <li>position : String</li>
                            <li>location : String</li>
                        </ul>
                    </div>
                </div>

                {/* update job*/}
                <div className='px-5 border-[1px] border-slate-900 rounded-lg'>
                    <div className='text-[14px] font-semibold flex flex-col'>
                        <h1>- Update :</h1>
                        <h1 className='font-normal italic text-[13px] ml-1 text-center'>
                            Base Url /contact/create-job?id=(job._id)
                        </h1>
                    </div>
                    <div className='mb-2'>
                        <h1 className='text-[13px] font-semibold'>Method : PATCH</h1>
                        <h1 className='text-[13px] font-semibold'>Header : Bearer "token" </h1>
                        <h1 className='text-[13px] font-semibold'>Body :</h1>
                        <ul className='px-4 text-[13px]'>
                            <li>job_name : String</li>
                            <li>position : String</li>
                            <li>location : String</li>
                        </ul>
                    </div>
                </div>

                {/* delete */}
                <div className='px-5 border-[1px] border-slate-900 rounded-lg'>
                    <div className='text-[14px] font-semibold flex flex-col'>
                        <h1>- Delete :</h1>
                        <h1 className='font-normal italic text-[13px] ml-1 text-center'>
                            Base Url /contact/create-job?id=(job._id)
                        </h1>
                    </div>
                    <div className='mb-2'>
                        <h1 className='text-[13px] font-semibold'>Method : DELETE</h1>
                        <h1 className='text-[13px] font-semibold'>Header : Bearer "token" </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobAPI