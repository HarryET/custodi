import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useClient } from 'react-supabase'

type ResetPasswordInputs = {
  newPassword: string
  confirmNewPassword: string
}

const ResetPasswordForm: NextPage = () => {
  const supabaseClient = useClient()
  const router = useRouter()

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInputs>()

  const onSubmit: SubmitHandler<ResetPasswordInputs> = async (data) => {
    const session = supabaseClient.auth.session()
    const { error } = await supabaseClient.auth.api.updateUser(String(session?.access_token), {
      password: data.newPassword,
    })
    if (error) {
      toast.error(error.message, {
        position: 'top-right',
        icon: '❌',
      })
      return
    }

    toast.success('Password succesfully updated.', {
      position: 'top-right',
      icon: '✅',
    })

    router.push('/login')
  }

  return (
    <div className="flex h-screen flex-col m-7">
      <div className="flex flex-col w-11/12 md:w-1/2 lg:w-1/3 items-center justify-center ml-auto mr-auto m-28">
        <h1 className="text-3xl lg:text-4xl font-bold w-max mb-11">Reset Password</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center content-center mb-6"
        >
          <div className="w-full mb-3">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              className="password w-full mt-2 h-14 rounded-xl border-gray-300"
              {...register('newPassword', {
                required: true,
                minLength: 4,
                maxLength: 24,
                validate: (value) => value === getValues('confirmNewPassword'),
              })}
            />
            {errors.newPassword && (
              <span>{passwordErrorMessageForType(errors.newPassword.type)}</span>
            )}
          </div>
          <div className="w-full mb-3">
            <label htmlFor="password">Confirm New Password</label>
            <input
              type="password"
              className="password w-full mt-2 h-14 rounded-xl border-gray-300"
              {...register('confirmNewPassword', {
                required: true,
                validate: (value) => value === getValues('newPassword'),
              })}
            />
            {errors.confirmNewPassword && (
              <span>{passwordErrorMessageForType(errors.confirmNewPassword.type)}</span>
            )}
          </div>
          <div className="w-full flex flex-col items-end">
            <input
              type="submit"
              value="Update Password"
              className="w-full text-xl lg:text-2xl mt-5 h-14 p-2 bg-primary text-gray-50 rounded-xl hover:bg-secondary cursor-pointer transition duration-500 ease-in-out"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPasswordForm

export const passwordErrorMessageForType = (type: string) => {
  switch (type) {
    case 'required':
      return 'Password is required'
    case 'minLength':
      return 'Password must be at least 4 characters long'
    case 'maxLength':
      return 'Password must be shorter than 24 characters long'
    case 'validate':
      return 'Passwords do not match'
    default:
      return 'Please enter a valid password!'
  }
}
