import React from 'react'
import {Navbar,Hero,Shopping, Footer} from '../components/index'

export default function Home() {
  return (
   <React.Fragment>
    <Hero/>
    <Shopping/>
    <hr />
    <hr />
    <Footer/>
   </React.Fragment>
   
  )
}
