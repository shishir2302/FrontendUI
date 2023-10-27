// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })

import Navbar from '../../components/Navbar'
import Scroll from '../../components/Scroll'
import Upper from '../../components/Upper'
import Lower from '../../components/Lower'
import Stickydot from '../../components/Stickydot'
import { useEffect } from 'react'

export default function index() {

   useEffect(() =>{
   ( async() => {
      const LocomotiveScroll = (await import ('Locomotive-scroll')).default;
      const locomotivescroll = new LocomotiveScroll
    })()

   },[])
 
  return (
    <>
    <div className='' >
    <Stickydot/>
    <Navbar/>
    <Upper/>
    <Scroll/>
    <Lower/>
    </div>
    </>
  )
}

