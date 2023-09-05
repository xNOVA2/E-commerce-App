import { ShoppingBag } from 'lucide-react'
import Logo from '../../public/Logo.jpg'
import Image from 'next/image'
export default function Navbar() {
  return (
    <>
      <nav className='flex justify-between items-center p-2 '>
        <div className='flex justify-start  items-center'>

          <Image src={Logo} alt='logo' width={70} height={50} />
          <p className='font-sans font-bold lg:text-3xl md:text-xl'>SportsSphere</p>

        </div>
        <div className=''>
          <ShoppingBag />
        </div>
      </nav>
    </>
  )
}
