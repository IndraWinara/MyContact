import React from 'react'

const ListContact = ({data}) => {
console.log('list',data)
  return (
    <div className='bg-white rounded-2xl h-[50px] gap-2 w-full mt-2 flex items-center px-2'>
        <img src={data?.image_url} alt='avatar'className='w-[30px] h-[30px]'/>
        <p>{data?.email}</p>
    </div>
  )
}

export default ListContact