import React from 'react'
import SectionHeading from './section-heading'

export default function About() {
  return (
      <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
          <SectionHeading>About me</SectionHeading>
          <p className="mb-3 text-xl">
              Hey Everyone! I&apos;m a <span className='font-medium'>full stack developer</span> specializing in <span className='font-medium italic underline'>MERN (MongoDB, Express, React, Node.js) stack development</span> with 2 years of experience in building robust, scalable, and efficient web applications, I excel in creating seamless <span className='font-medium italic'>user experiences and backend logic</span>.
               I am always looking to learn new technologies. I am currently looking for a{" "}
              <span className="font-medium">full-time position</span> as a software developer.
          </p>
          {/* <p>
              <span className="italic">When I'm not coding</span>, I enjoy to listen to music and to watch movies. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">Competitive Programming</span>.
          </p> */}
    </section>
  )
}
