"use client"
import React from 'react'
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (

    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>

    //   <motion.div className='text-center pt-10'
    //       initial={{ opacity: 0, y: 100 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{delay: 0.125}}
      
    //   >
    //         <span className="font-serif font-normal ">Scroll Down</span>
    //         <a href="#about">
    //               <div className='mt-2 item-scroll
    //         ' ></div>
    //         </a>
    // </motion.div>
  )
}
