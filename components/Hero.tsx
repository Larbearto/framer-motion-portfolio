import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import profilePic from '../public/updateprofile.png'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Larry Ly', 'Web Developer', 'Data Analyst', 'Determined SOB'],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center'>
      <BackgroundCircles />
      <Image
        className='relative object-cover mx-auto rounded-full'
        src='https://cdn.sanity.io/images/evjfr55h/production/5f4a263abb785487ec2ebf089b4879b1195ce003-6000x4000.png'
        alt=''
        height={300}
        width={300}
      />
      <div className='z-20'>
        <h2 className='pb-2 text-sm text-gray-500 uppercase tracking-[15px]'>Web Developer</h2>
        <h1 className='px-10 text-5xl font-semibold lg:text-6xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
