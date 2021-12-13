import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <label className="text-gray-500">
      {label}
      <input
        {...props}
        className={`rounded-lg h-10 border-gray-300 border block mb-6 mt-2 ${props.className}`}
      />
    </label>
  )
}
