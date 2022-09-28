import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div>
      <div className='border border-red-500 rounded-full h-[200px] mt-52 animate-ping' />
    </div>
  )
}

export default BackgroundCircles
