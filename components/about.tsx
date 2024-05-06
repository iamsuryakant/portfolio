"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
 const { ref } = useSectionInView("About");

  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay: 0.175}}
      id='about'
    >
          <SectionHeading>About me</SectionHeading>
          <p className="mb-3">
              Hey Everyone! I&apos;m a <span className='font-medium'>full stack developer</span> specializing in <span className='font-medium italic underline'>MERN (MongoDB, Express, React, Node.js) stack development</span> with <span className='font-medium'>2 years</span> of experience in building robust, scalable, and efficient web applications, I excel in creating seamless <span className='font-medium italic'>user experiences and backend logic</span>.
               I am always looking to learn new technologies. I am currently looking for a{" "}
              <span className="font-medium">full-time position</span> as a software developer.
          </p>
          {/* <p>
              <span className="italic">When I'm not coding</span>, I enjoy to listen to music and to watch movies. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">Competitive Programming</span>.
          </p> */}
    </motion.section>
  )
}
