"use client"

import React, { useState } from 'react'
import Heading from './Heading'
import { pricingMode } from '@/types/interfaces'
import PricingCard from './PricingCard'
import { pricingItems } from '@/constants/pricing'

const PricingSection = () => {

  const [mode,setMode]=useState<pricingMode>("monthly")
  return (
<section className='flex flex-col items-center gap-8'>
 <Heading title='Find a plan to power your project'/>
 <div className='max-w-[12rem] w-full mx-auto p-1 flex test-base bg-slate-800 rounded-lg'>
<p className={`basis-1/2 text-center capitalize font-semibold tracking-wide rounded-lg cursor-pointer ${mode === "monthly" && "bg-sky-600 text-slate-100"}`} onClick={()=>setMode("monthly")}>monthly</p>
<p className={`basis-1/2 text-center capitalize font-semibold tracking-wide rounded-lg cursor-pointer ${mode === "annually" && "bg-sky-600  text-slate-100"}`} onClick={()=>setMode("annually")}>annually</p>
 </div>
 <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
  {
    pricingItems.map((item,index)=>(
      <PricingCard key={index} {...item} mode={mode}/>
    ))
  }

 </div>

</section>
  )
}

export default PricingSection
