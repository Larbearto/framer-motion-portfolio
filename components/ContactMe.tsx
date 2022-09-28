import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {}

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:larryly1@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div className='flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7 justify-evenly'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I love coffee and chatting.. <span className='decoration-[#f7ab0a]/50 underline'>Let&apos;s Talk</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center justify-center space-x-5'>
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>714-907-5273</p>
          </div>

          <div className='flex items-center justify-center space-x-5'>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>LarryLy1@gmail.com</p>
          </div>

          <div className='flex items-center justify-center space-x-5'>
            <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Southern California</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto space-y-2 w-fit'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type='text' />
            <input {...register('email')} placeholder='Email' className='contactInput' type='email' />
          </div>

          <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />

          <textarea {...register('message')} placeholder='Message' className='contactInput' />

          <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
