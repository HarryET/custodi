import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useSignIn } from 'react-supabase'
import Link from 'next/link'
import OauthProviders from '../components/OauthProvider'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'
import { paths } from '../utils/paths'

type LoginInputs = {
  email: string
  password: string
}

const Login: NextPage = () => {
  const router = useRouter()
  const { isLoading: isUserLoading, session } = useAuth({ loggedInRedirect: paths.overview() })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>()
  const [{}, signIn] = useSignIn()

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const { error } = await signIn(
      {
        email: data.email,
        password: data.password,
      },
      {
        redirectTo: window.location.hostname,
      }
    )

    if (error) {
      toast.error(error.message, {
        position: 'top-right',
        icon: '❌',
      })
      return
    }

    toast.success('Success, redirecting now.', {
      position: 'top-right',
      icon: '✅',
    })
    router.push(paths.overview())
  }

  return (
    <>
      <Head>
        <title>Custodi Login</title>
      </Head>
      <div className="w-full h-full sm:flex sm:flex-col sm:justify-center sm:items-center text-gray-800">
        <div className="h-full flex flex-col items-center justify-center mx-6 sm:w-1/2 lg:w-2/6">
          <div>
            <h1 className="text-5xl font-bold w-max mx-auto sm:mb-1">Login</h1>
            <div className="flex w-max mx-auto mb-3 mt-6">
              <p className="mr-1">Dont&apos;t have an account?</p>
              <Link href="/register">
                <a className="text-primary hover:text-secondary">Sign Up</a>
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
              {errors.email && <span>{emailErrorMessageForType(errors.email.type)}</span>}
            </div>
            {/* TODO: Add show and hide password */}
            <div className="w-full">
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
              {errors.password && <span>{passwordErrorMessageForType(errors.password.type)}</span>}
            </div>
            {/* TODO: change link to forgot page */}
            <Link href="/">
              <a className="text-primary text-sm place-self-end">Forgot password?</a>
            </Link>
            <div className="w-full flex flex-col items-end">
              <input
                type="submit"
                value="Login"
                className="w-full mt-6 p-2 bg-primary text-gray-50 rounded-xl hover:bg-secondary cursor-pointer transition duration-500 ease-in-out"
              />
            </div>
          </form>
          <div className="flex flex-row w-full items-center justify-center">
            <div className="w-full h-0.5 bg-gray-200" />
            <p className="w-full text-center text-gray-500">or login with</p>
            <div className="w-full h-0.5 bg-gray-200" />
          </div>
          <OauthProviders />
        </div>
      </div>
    </>
  )
}

export default Login

export const passwordErrorMessageForType = (type: string) => {
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

export const emailErrorMessageForType = (type: string) => {
  switch (type) {
    case 'required':
      return 'Email is required'
    default:
      return 'Please enter a valid email!'
  }
}
