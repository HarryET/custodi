import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from "react-hook-form";
import toast from 'react-hot-toast';
import { useSignUp } from 'react-supabase';
import Link from "next/link";

type LoginInputs = {
    email: string,
    password: string,
};

const Login: NextPage = () => {
    const router = useRouter();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginInputs>();
    const [{ }, signUp] = useSignUp();
    const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
        const {error} = await signUp({
            email: data.email,
            password: data.password
        });
        
        if(error) {
            toast.error(error.message, {
                position: "top-right",
                icon: "❌"
            });
            return;
        }

        toast.success("Please check your email.", {
            position: "top-right",
            icon: "⚠️"
        });

        router.push("/login");
    }

    const PasswordErrorMessageForType = (type: string) => {
        switch (type) {
            case "required":
                return "Password is required";
            case "minLength":
                return "Password must be at least 4 characters long";
            case "maxLength":
                return "Password must be shorter than 24 characters long";
            default:
                return "Please enter a valid password!";
        }
    }

    const EmailErrorMessageForType = (type: string) => {
        switch (type) {
            case "required":
                return "Email is required";
            default:
                return "Please enter a valid email!"
        }
    }

    return (
        <>
            <Head>
                <title>Custodi Registration</title>
            </Head>
            <div className="w-full h-full sm:flex sm:flex-col sm:justify-center sm:items-center">
                <div className="h-full flex flex-col items-start justify-between mx-6 sm:w-1/2 lg:w-1/4 sm:justify-center">
                    <div>
                        <h1 className="text-5xl font-bold mt-6 sm:mb-6">Register</h1>
                        {/* TODO Description needed here? */}
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center content-center mb-6">
                        <div className="w-full mb-2">
                            <input type="email" placeholder="Email" className="w-full" {...register("email", { required: true })} />
                            {errors.email && <span>{EmailErrorMessageForType(errors.email.type)}</span>}
                        </div>
                        <div className="w-full">
                            <input type="password" placeholder="Password" className="w-full" {...register("password", { required: true, minLength: 4, maxLength: 24 })} />
                            {errors.password && <span>{PasswordErrorMessageForType(errors.password.type)}</span>}
                        </div>
                        <div className="w-full flex flex-col items-end">
                            <input type="submit" value="Login" className="w-full mt-6 p-2 bg-blue-500 text-gray-50" />
                            <p className="text-gray-500 mt-2">
                                Already got an account? 
                                <span className="text-blue-500 ml-1 hover:underline">
                                    <Link href="/login">Login now!</Link>
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
