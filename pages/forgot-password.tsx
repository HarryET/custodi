import { useState } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useResetPassword } from 'react-supabase'

type ForgotPasswordInput = {
  email: string
}

const ForgotPassword: NextPage = () => {
  const [showForm, setShowForm] = useState(true)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>()
  const [{}, resetPassword] = useResetPassword()

  const onSubmit: SubmitHandler<ForgotPasswordInput> = async (data) => {
    const { error } = await resetPassword(data.email)

    if (error) {
      toast.error(error.message, {
        position: 'top-right',
        icon: '❌',
      })
      return
    }
    setShowForm(false)
  }

  const returnToLogin = () => {
    router.push('/login')
  }

  const resetPasswordFormView = (
    <div className="flex flex-col items-center justify-center ml-auto mr-auto m-28">
      <h1 className="text-3xl lg:text-4xl font-bold w-max mb-11">Forgot Password?</h1>
      <p className="text-center text-sm sm:text-xl lg:text-2xl">
        Please enter your registered email address.
      </p>
      <p className="text-center text-sm sm:text-xl lg:text-2xl mb-11">
        We’ll send instructions to help reset your password.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:w-9/12 lg:w-full flex flex-col items-center content-center mb-6"
      >
        <div className="w-full mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="email w-full mt-2 h-14 rounded-xl border-gray-300"
            {...register('email', { required: true })}
          />
          {errors.email && <span>{emailErrorMessageForType(errors.email.type)}</span>}
        </div>
        <div className="w-full flex flex-col items-end">
          <input
            type="submit"
            value="Send Reset Instructions"
            className="w-full text-xl lg:text-2xl mt-5 h-14 p-2 bg-primary text-gray-50 rounded-xl hover:bg-secondary cursor-pointer transition duration-500 ease-in-out"
          />
        </div>
      </form>
    </div>
  )

  const emailSentView = (
    <div className="flex flex-col items-center justify-center ml-auto mr-auto m-28">
      <h1 className="text-3xl lg:text-4xl font-bold w-max mb-11">Successfully Sent!</h1>
      <p className="text-center text-sm sm:text-xl lg:text-2xl">
        Please check your email for instructions on resetting your password.
      </p>
    </div>
  )

  return (
    <>
      <div className="flex h-screen flex-col m-7">
        <div
          onClick={returnToLogin}
          className="flex justify-items-center ml-8 mt-24 cursor-pointer md:ml-20 lg:ml-44"
        >
          <ArrowLeftIcon className="h-8 w-8 " />
          <span className="font-semibold text-lg ml-8 md:ml-16 ">Back to Login</span>
        </div>
        {showForm ? resetPasswordFormView : emailSentView}
      </div>
    </>
  )
}

export default ForgotPassword

export const emailErrorMessageForType = (type: string) => {
  switch (type) {
    case 'required':
      return 'Email is required'
    default:
      return 'Error Sending Email'
  }
}
