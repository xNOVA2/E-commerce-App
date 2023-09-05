import React from 'react'
import Card from './Card'
import { Product } from '@/utils/Products'
export default function Shopping() {
  return (
    <section>
    <div className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8  ">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Best Selling Products
        </h2>
  
        <p className="mt-4 max-w-md text-gray-500">
        Our best-selling products embody quality and value, satisfying countless customers with unwavering excellence.
        </p>
        <button className='border-2 border-black p-4 mt-2 rounded-sm'>Brower More </button>
      </header>
  
      
  
      <ul className="mt-4 grid  sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {Product.map((item)=>{
        return(
          <Card ProductURL={item.ProductURL} description={item.description} price={item.price} title={item.title} key={item.id}/>
        )
      })}

      </ul>
    </div>
  </section>
  )
}
