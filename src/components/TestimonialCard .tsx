import React, { FC } from 'react'
import { Testimonials } from "@/types/interfaces";
import Image from 'next/image';
import { Quote } from 'lucide-react';
 interface TestimonialCardProps extends Testimonials{}
const TestimonialCard:FC<TestimonialCardProps>= ({imageUrl,name,role,review}) => {
  return (
    <div className='flex flex-col gap-y-3'>
      <Quote className='text-sky-600 w-12 h-12'/>
      <p>{review}</p>
      <div className='flex gap-x-2'>
      <Image src={imageUrl} alt={name} width={40} height={40} className=' rounded-full'/>
      <div className='flex flex-col'>
         <span className='text-sm text-slate-50'>{name}</span>
         <span className='text-sm text-sky-600'>{role}</span>
      </div>
      </div>

    </div>
  )
}

export default TestimonialCard 
