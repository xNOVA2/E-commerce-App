import Link from 'next/link'
import Shoes from '../../public/Shoes1.jpg'
export default function Hero() {
  return (
    <section>
  <div
    className="w-full px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src="https://images.unsplash.com/photo-1620844595703-c47c4ad2cc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fFNob2VzJTIwYWRpZGFzJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          className="absolute  h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Quality Meets Affordability</h2>

        <p className="mt-4 text-gray-600">
        Experience the perfect blend of quality and affordability at our store. We pride ourselves on offering premium products at prices that won't break the bank. Discover a wide range of items that cater to your needs without compromising on excellence. Shop smart, shop with us!
        </p>
    <Link href={'/Man'}

      className="mt-8 inline-block rounded  px-12 py-3 text-sm font-medium  bg-white border-2 border-black"
    >
        <button>
        Shop Now
        </button>
    </Link>

      </div>
    </div>
  </div>
</section>
  )
}
