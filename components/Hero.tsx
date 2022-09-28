import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Larry Ly',
      'Web Developer',
      'Data Analyst',
      'Hands Registered as deadly weapons',
      'Free Diver'
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div>
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#f7ab0a' />
      </h1>
    </div>
  )
}
