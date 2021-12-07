import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useSignUp } from 'react-supabase'
import Link from 'next/link'
import OauthProvider from '../components/OauthProvider'

type LoginInputs = {
  email: string
  password: string
}

const Login: NextPage = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>()
  const [{}, signUp] = useSignUp()
  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const { error } = await signUp({
      email: data.email,
      password: data.password,
    })

    if (error) {
      toast.error(error.message, {
        position: 'top-right',
        icon: '❌',
      })
      return
    }

    toast.success('Please check your email.', {
      position: 'top-right',
      icon: '⚠️',
    })

    router.push('/login')
  }

  const PasswordErrorMessageForType = (type: string) => {
    switch (type) {
      case 'required':
        return 'Password is required'
      case 'minLength':
        return 'Password must be at least 4 characters long'
      case 'maxLength':
        return 'Password must be shorter than 24 characters long'
      default:
        return 'Please enter a valid password!'
    }
  }

  const EmailErrorMessageForType = (type: string) => {
    switch (type) {
      case 'required':
        return 'Email is required'
      default:
        return 'Please enter a valid email!'
    }
  }

  return (
    <>
      <Head>
        <title>Custodi Registration</title>
      </Head>
      <div className="w-full h-full sm:flex sm:flex-col sm:justify-center sm:items-center text-gray-800">
        <div className="h-full flex flex-col items-start justify-between mx-6 sm:w-1/2 lg:w-2/6 sm:justify-center">
          <div>
            <h1 className="text-5xl font-bold mt-6 sm:mb-1">Create an account</h1>
            <div className="flex w-max mx-auto mb-3">
              <p className="mr-1">Already a member?</p>
              <Link href="/login">
                <a className="text-primary hover:text-secondary">Login</a>
              </Link>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center content-center mb-6"
          >
            <div className="w-full mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="email w-full rounded-xl border-gray-300"
                {...register('email', { required: true })}
              />
              {errors.email && <span>{EmailErrorMessageForType(errors.email.type)}</span>}
            </div>
            <div className="w-full mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="password w-full rounded-xl border-gray-300"
                {...register('password', {
                  required: true,
                  minLength: 4,
                  maxLength: 24,
                })}
              />
              {errors.password && <span>{PasswordErrorMessageForType(errors.password.type)}</span>}
            </div>
            <div className="place-self-start">
              <input
                type="checkbox"
                className="rounded-md border-primary cursor-pointer focus:outline-none focus:ring-primary"
                name="tos"
                id="tos"
              />
              {/* TODO: change link to terms of serves page */}
              <label htmlFor="tos" className="text-sm">
                {' '}
                I agree to the{' '}
                <Link href="/">
                  <a className="text-primary">Terms of Service</a>
                </Link>
              </label>
            </div>
            <div className="w-full flex flex-col items-end">
              <input
                type="submit"
                value="Login"
                className="w-full mt-6 p-2 bg-primary text-gray-50 rounded-xl hover:bg-secondary cursor-pointer transition duration-500 ease-in-out"
              />
            </div>
          </form>
          <OauthProvider />
        </div>
      </div>
    </>
  )
}

export default Login
