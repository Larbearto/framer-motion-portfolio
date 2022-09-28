import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col items-center flex-shrink-0 rounded-lg spacy-y-7 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src='https://cdn.sanity.io/images/evjfr55h/production/20e55e4696517c814b1fd382fe4c6c3fb9283613-351x525.png'
        className='w-50 h-50 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        alt=''
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of PurpleDreamz Technologies</h4>
        <p className='mt-1 text-2xl font-bold'>Larry Legend</p>
        <div className='flex my-2 space-x-2'>
          <Image
            className='w-10 h-10 rounded-full'
            src='https://cdn.sanity.io/images/evjfr55h/production/9a0a74934644f50d50ef4ed41fa8b0b27c6f1b4e-250x250.png'
            height={100}
            width={100}
            alt='html'
          />
          <Image
            className='w-10 h-10 rounded-full'
            src='https://cdn.sanity.io/images/evjfr55h/production/49aa1f4153c5ce3c466a6f96d2cb9eafcb358f16-250x250.png'
            height={100}
            width={100}
            alt='html'
          />
          <Image
            className='w-10 h-10 rounded-full'
            src='https://cdn.sanity.io/images/evjfr55h/production/32a5a3bea31d4e41cc6ec8e9e50cbf4cfd007dea-250x250.png'
            height={100}
            width={100}
            alt='html'
          />
          <Image
            className='w-10 h-10 rounded-full'
            src='https://cdn.sanity.io/images/evjfr55h/production/353fce1c76b3e6eb4dc59bf8c53dd4b8a9b3db38-250x250.png'
            height={100}
            width={100}
            alt='html'
          />
          <Image
            className='w-10 h-10 rounded-full'
            src='https://cdn.sanity.io/images/evjfr55h/production/47a5513caffa39b3afa206afcab7f5e388c37c29-250x250.png'
            height={100}
            width={100}
            alt='html'
          />
          <Image
            className='w-10 h-10 rounded-full'
            src='https://cdn.sanity.io/images/evjfr55h/production/2d6776cd8ccaa53c6e548e03117671e1de4aa510-629x629.png'
            height={100}
            width={100}
            alt='html'
          />
          <Image
            className='w-10 h-10 rounded-full'
            src='https://cdn.sanity.io/images/evjfr55h/production/1fe17fd5547aeba7aa4d4fb3427ab27c7860d0be-222x302.png'
            height={100}
            width={100}
            alt='html'
          />
          <Image
            className='w-10 h-10 rounded-full'
            src='https://cdn.sanity.io/images/evjfr55h/production/2f4da221fbdde8588262b191d774817b3af45350-250x250.png'
            height={100}
            width={100}
            alt='html'
          />
          <Image
            className='w-10 h-10 rounded-full'
            src='https://cdn.sanity.io/images/evjfr55h/production/b3d9e46525e5d123719798f966c2ab70c8a8b17a-300x243.png'
            height={100}
            width={100}
            alt='html'
          />

          {/* Tech Used  */}
          {/* Tech Used  */}
          {/* Tech Used  */}
        </div>
        <p className='py-5 text-gray-300 uppercase'>Started work... -Ended...</p>

        <ul className='ml-5 space-y-4 text-lg list-disc'>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  )
}
