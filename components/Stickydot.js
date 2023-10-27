import React, { useEffect } from 'react'
import { motion,useMotionValue } from "framer-motion";



export default function Stickydot() {
    
    const  cursorSize=20;
    const mouse={
        x:useMotionValue(0),
        y:useMotionValue(0)
    }

    const managemouse=(e)=>{
        const {clientX, clientY}=e
        mouse.x.set(clientX - cursorSize/2),
        mouse.y.set(clientY - cursorSize/2)

    }

    useEffect(()=>{
        window.addEventListener('mousemove', managemouse)
        return ()=>{window.removeEventListener('mousemove',managemouse)}
    })

  return (
    <>
    <motion.div className='gradient-border animate-bounce w-[20px] h-[20px] rounded-full fixed bg-transparent' style={{left: mouse.x, top: mouse.y}}></motion.div>
    </>
  )
}
