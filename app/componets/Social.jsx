import React from 'react'
import Link from 'next/link'
import {FaFacebookF, FaInstagram, FaLinkedin, FaTelegram} from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa'

const data = [
  {
    id : 1,
    icon : <FaFacebookF />,
    link : "",
  },
  {
    id : 2,
    icon : <FaInstagram />,
    link : "",
  },
  {
    id : 3,
    icon : <FaLinkedin />,
    link : "",
  },
  {
    id : 4,
    icon : <FaTelegram />,
    link : "",
  },
  {
    id : 5,
    icon : <FaWhatsapp />,
    link : "",
  },
]

const Social = () => {
  return (
    <div className='fixed bottom-0'>
      <div className='flex justify-center bg-red-400 px-5 py-2 border-t-red-500 rounded-tl-lg rounded-tr-lg'>
        {
          data.map(item => (
            <Link 
              href={item.link} 
              key={item.id} 
              className='text-white text-xl mx-2 hover:scale-150'
              target='_blank'
            >
              {item.icon}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Social
