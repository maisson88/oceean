import React, { FC } from 'react'
import { pricing, pricingMode } from "@/types/interfaces";
import Button from './Button';
import { Check } from 'lucide-react';
 interface PricingCardProps extends pricing{
    mode:pricingMode
 }
const PricingCard:FC<PricingCardProps> = ({title,description,monthlyPrice,annuallyPrice,features,isMostPopular,glowPosition,mode}) => {
  return (
    <div  className={`relative w-full py-6 px-4 flex flex-col space-y-4 lg:space-y-4 ${isMostPopular ?'border-2 border-sky-700 bg-slate-800':"border-2 border-slate-700" } rounded-lg overflow-hidden`} >
          <figure className={` absolute bubble w-96 lg:w-[120px] h-72 bg-sky-600 z-10 ${glowPosition==="right" ?"right-7":""} bottom-80 `} />
{
    isMostPopular&&
         <p className='text-slate-100  capitalize text-base text-end  rounded-3xl bg-sky-600 px-3 w-fit flex justify-end absolute right-3 top-2 '>most popular</p>

}
          <h1 className='text-slate-100 font-bold capitalize text-base'>{title}</h1>
          <p className='text-sm md:w-3/4'>{description}</p>
          <h1 className='text-slate-100 font-bold text-2xl'>${mode==="monthly"?monthlyPrice:annuallyPrice}  
                <small className='text-sm font-normal px-1'>
                 /{
                    mode==="monthly" ?"month":"year"
                }
            </small>
          </h1>
          <Button variant={isMostPopular?"primary":"outline"} isFullSize>Buy Plan</Button>

          <ul className='space-y-4'>
            {features.map((item,index)=>(
                <li className='flex items-center gap-x-2' key={index}>
                    <Check className='text-sky-600'/>
                    {item}</li>
            ))}
          </ul>
    </div>
  )
}

export default PricingCard
