import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin'>
        {projects.map((project, i) => (
          <div
            key={project.toString()}
            className='flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src='https://cdn.sanity.io/images/evjfr55h/production/2d6776cd8ccaa53c6e548e03117671e1de4aa510-629x629.png'
              alt=''
            />

            <div className='max-w-6xl px-0 space-y-10 md:px-10'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#f7ab0a]/50'>
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                UPS clone
              </h4>

              <p className='text-lg text-center md:text-left'>
                Netflix 2.0 app that has a Log In and Log Out Authentication with Google. It has a beautiful Home Screen
                with all the movies and hover functions just like the Netflix website. There is also a subscription page
                where you can see your active monthly subscription. We also use Stripe Payments for the monthly Netflix
                Subscriptions!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px]-skew-y-12' />
    </motion.div>
  )
}

export default Projects
