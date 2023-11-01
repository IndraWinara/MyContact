
import AddresAPI from '@/components/AddresAPI'
import Authentication from '@/components/Authentication'
import Contact from '@/components/Contact'
import JobAPI from '@/components/JobAPI'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-full bg-slate-400 w-full flex md:flex-wrap md:justify-normal flex-col justify-center items-center'>
      <Authentication/>
      <Contact/>
      <AddresAPI/>
      <JobAPI/>
    </div>
  )
}
