import Link from 'next/link'
import React from 'react'
import { CardProps } from '@/Types/Type'
export default function Card({title,ProductURL,price,description}:CardProps) {
  return (
    <Link href={''} className="group relative block">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
        src={ProductURL}
alt="Item"
      className="  h-full w-full object-cover  "
    />

  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-medium text-white">{title}</h3>

    <p className="mt-1.5 max-w-[40ch] text-xs text-white">
      {description}
    </p>

    <button
      className="mt-3 inline-block border-2 border-white hover:border-black rounded-md  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      Shop Now
    </button>
  </div>
</Link>
  )
}
