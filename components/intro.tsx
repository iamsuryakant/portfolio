"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import avatar from '@/public/pic.png'
import {motion} from 'framer-motion'
import Typed from 'typed.js'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {

    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Software Developer", "Programmer", "Full Stack Developer"],
            startDelay: 300,
            typeSpeed: 90,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "!"
        });

        return () => {
            typed.destroy();
        };


    }, []);

  return (
      <section
          ref={ref}
          id='home'
          className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
          <div className='flex items-center justify-center'>
              <div className='relative'>
                  <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                          type: 'tween',
                          duration: 0.2,
                      }}
                  >
                      <Image src={avatar} alt='Profile-Pic' width='192' height='192' quality='95' priority={true}
                  className='h-40 w-40 object-cover border-[0.35rem] rounded-full border-white  shadow-xl'
                  />
                  </motion.div>
                  {/* <motion.span className='absolute bottom-0 right-0 text-4xl'
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                          type: 'spring',
                          stiffness: 125,
                          duration: 0.7,
                          delay: 0.1
                      }}
                  >👋</motion.span> */}
              </div>
          </div>

          <motion.div className='mb-10 mt-8 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          >
                  <h1 className='mt-2 font-bold text-4xl flex items-center justify-center'>Suryakant Thakur</h1>
                  <div className='mt-2 font-serif text-2xl flex items-center justify-center'>I&apos;m a <span className='ml-2 text-red-600 dotted' ref={el}></span></div>
        </motion.div>

          {/* <motion.p 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
          >
              

              <span className='font-bold'>Hello, I&apos;m Suryakant Thakur</span>. I&apos;m a {""} <span className='font-bold'>full-stack developer </span> specializing in {" "}
              <span className='font-bold underline'>MERN <br/>(MongoDB, Express, React, Node.js) <br/>stack development</span> {" "}
              with {""} <span className='font-bold'>2 years</span> of experience in building robust, scalable, and efficient web applications, I excel in creating seamless <span className='italic'>user experiences and backend logic</span>.
              Let&apos;s build something amazing together!.
          </motion.p> */}
          <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
          initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                  delay:0.1,
              }}
          >
              <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition'
                  onClick={() => {
                      setActiveSection("Contact");
                      setTimeOfLastClick(Date.now());
                  }}
              > Coffee with Me <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> </Link>
              <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10' href='https://drive.google.com/file/d/12vlIbcJ9J_Pl1xgEr9GWsBQhThnHn-YC/view?usp=sharing' target='_blank'>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>
              <a className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full text-[1.3rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60' href='https://www.linkedin.com/in/iamsuryakant/' target='_blank'><BsLinkedin /></a>
              <a className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full text-[1.3rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer orderBlack dark:bg-white/10 dark:text-white/60' href='https://www.github.com/iamsuryakant' target='_blank'><FaGithubSquare/></a>
          </motion.div>
    </section>
  )
}
