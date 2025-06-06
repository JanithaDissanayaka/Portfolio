import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}

        className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
        <div classname="text-center ">
            <motion.p 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:100}}
            transition={{duration:1}}
            className="my-4 text-center">{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:100}}
            transition={{duration:1.5}}
            className="my-4 text-center">{CONTACT.email}</motion.p>
            <motion.p 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:100}}
            transition={{duration:2}}
            className="my-4 text-center">{CONTACT.phoneNo}</motion.p>
        </div>
        </div>
  )
}

export default Contact
