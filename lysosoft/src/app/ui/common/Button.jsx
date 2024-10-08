import Link from 'next/link'
import React from 'react'

const Button = ({title,url}) => {
  return (
    <Link href={url} className='bg-white/20 px-6 py-2 rounded-[8px] text-sm font-medium text-white z-20 action-btn peer w-fit'>{title} ↗</Link>

  )
}

export default Button