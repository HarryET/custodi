import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useSignUp } from 'react-supabase'
import Link from 'next/link'
import OauthProviders from '../components/OauthProvider'
import { emailErrorMessageForType, passwordErrorMessageForType } from './login'

type RegisterInputs = {
  email: string
  password: string
  tos: boolean
}

export const tosErrorMessageForType = (type: string) => {
  return "Please accept the TOS."
}

const Register: NextPage = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>()

  const [{}, signUp] = useSignUp()

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    const { error } = await signUp({
      email: data.email,
      password: data.password,
    }, {
      redirectTo: window.location.hostname
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

  return (
    <>
      <Head>
        <title>Custodi Registration</title>
      </Head>
      <div className="w-full h-full sm:flex sm:flex-col sm:justify-center sm:items-center text-gray-800">
        <div className="h-full flex flex-col items-center justify-center mx-6 sm:w-1/2 lg:w-2/6">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-center mt-6 sm:mb-1">Create an account</h1>
            <div className="flex w-max mx-auto mb-3 mt-6">
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
              {errors.email && <span className="text-error font-bold mt-2">{emailErrorMessageForType(errors.email.type)}</span>}
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
              {errors.password && <span className="text-error font-bold mt-2">{passwordErrorMessageForType(errors.password.type)}</span>}
            </div>
            <div className="w-full flex flex-col items-start">
            <div className="place-self-start">
                <input
                  type="checkbox"
                  className="rounded-md border-primary cursor-pointer focus:outline-none focus:ring-primary"
                  {...register('tos', {
                    required: true,
                  })}
                />
                <label htmlFor="tos" className="text-sm">
                  {' '}
                  I agree to the{' '}
                  <Link href="/tos">
                    <a className="text-primary">Terms of Service</a>
                  </Link>
                </label>
              </div>
              {errors.tos && <span className="text-error font-bold mt-2">{tosErrorMessageForType(errors.tos.type)}</span>}
            </div>
            <div className="w-full flex flex-col items-end">
              <input
                type="submit"
                value="Sign Up"
                className="w-full mt-6 p-2 bg-primary text-gray-50 rounded-xl hover:bg-secondary cursor-pointer transition duration-500 ease-in-out"
              />
            </div>
          </form>
          <div className="flex flex-row w-full items-center justify-center">
            <div className="w-full h-0.5 bg-gray-200" />
            <p className="w-full text-center text-gray-500" >or sign up with</p>
            <div className="w-full h-0.5 bg-gray-200" />
          </div>
          <OauthProviders />
        </div>
      </div>
    </>
  )
}

export default Register
