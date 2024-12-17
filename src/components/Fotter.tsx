import React from 'react'
import Logo from './Logo'
import { Facebook, Github, Instagram, Twitter, Youtube } from 'lucide-react'
import { itemsFooter } from '@/constants/itemsFooter'

const Fotter = () => {
    const currentYear=new Date().getFullYear()
  return (
  <>
  <section className=' container'>
  <div className=' flex-col justify-center  lg:flex lg:justify-between gap-4'>
    <div className='flex flex-col md:items-center lg:items-start gap-4 lg:gap-6'>
<Logo/>
<p className='text-sm lg:max-w-[370]'>Making te world a better a place through constructing elegant hierarcies</p>
<ul className='flex gap-2 sm:justify-center'>
    <li className='hover:text-sky-400 cursor-pointer' ><Facebook className='h-5 w-5'/></li>
    <li className='hover:text-sky-400 cursor-pointer'  ><Instagram className='h-5 w-5'/></li>
    <li className='hover:text-sky-400 cursor-pointer' ><Twitter className='h-5 w-5'/></li>
    <li className='hover:text-sky-400 cursor-pointer' ><Github className='h-5 w-5'/></li>
    <li className='hover:text-sky-400 cursor-pointer' ><Youtube className='h-5 w-5'/></li>
</ul>
    </div>
<div className=' basis-2/3 grid grid-cols-2 lg:grid-cols-4 gap-x-40  gap-y-5'>
{
    itemsFooter.map((items,index)=>(
<div key={index}>
    <p className='text-slate-100 font-bold  mb-3'>{items.title}</p>
    <p className='text-sm capitalize mb-2 hover:text-sky-400 cursor-pointer '>{items.item1}</p>
    <p className='text-sm capitalize  mb-2 hover:text-sky-400 cursor-pointer '>{items.item2}</p>
    <p className='text-sm capitalize  mb-2 hover:text-sky-400 cursor-pointer '>{items.item3}</p>
    <p className='text-sm capitalize  mb-2 hover:text-sky-400 cursor-pointer '>{items.item4}</p>
    <p className='text-sm capitalize  mb-2 hover:text-sky-400 cursor-pointer '>{items.item5}</p>
   
</div>
    ))
}
</div>
  </div>
  <div className='mt-9  font-normal lg:text-start text-center border-t border-slate-700'>
    <p>{`©${currentYear} ocean, inc. all rights reserved.`}</p>
  </div>
  </section>
  </>
  )
}

export default Fotter
