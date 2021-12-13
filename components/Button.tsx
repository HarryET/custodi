import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'link' | 'outline'
}

export default function Button({ children, kind = 'primary', ...props }: Props) {
  let btnClass =
    'py-2 px-4 bg-primary text-gray-50 rounded-lg hover:bg-secondary cursor-pointer transition duration-500 ease-in-out'

  if (kind === 'link') {
    btnClass =
      'p-2  text-primary cursor-pointer hover:text-secondary transition duration-500 ease-in-out'
  } else if (kind === 'outline') {
    btnClass =
      'py-2 px-4 border-gray-300 border rounded-lg cursor-pointer hover:bg-gray-300 transition duration-500 ease-in-out'
  }
  return (
    <button {...props} className={`${btnClass} ${props.className}`}>
      {children}
    </button>
  )
}
