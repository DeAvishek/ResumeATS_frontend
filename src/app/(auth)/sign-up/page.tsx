"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { signup_validation } from "@/app/schema/sigup"
import z, { json } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import axios from "axios"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
const Page = () => {
    const url="http://127.0.0.1:8000" //just for sack of simplicity
    const [isSubmit, setisSubmit] = useState<boolean>(false)
    const [responseM, setResponseM] = useState<string>("")
    const router = useRouter();

    const form = useForm<z.infer<typeof signup_validation>>({
        resolver: zodResolver(signup_validation),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        }

    })

    const handleSignup = async(data:z.infer<typeof signup_validation>)=>{
        try {
            setisSubmit(true);
            const response =await axios.post(`${url}/user/admin/create_account`,data,
                {headers:{ "Content-Type": "application/json" }}
            );
            setResponseM(response.data.message)
            console.log(responseM)
            if(response.data.status==200){
                router.push('/analyzer')
            }

        } catch (error) {
            if(axios.isAxiosError(error)){
                setResponseM(error.response?.data?.detail|| "Email exists")

            }else{
                setResponseM("Server down we will reach you soon")
            }
        }finally{
            setisSubmit(false);
        }
    }


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
                <div className="w-full max-w-md p-10 bg-gray-300 rounded-2xl shadow-xl space-y-6">
                    <h1 className="text-4xl font-bold text-sky-700 text-center">Join Now</h1>
                    <div className="text-center flex justify-center items-center">
                        <p className="mt-2 text-gray-600 font-bold">Sign up to experience resume</p>
                        <Image
                            src='https://imgcdn.stablediffusionweb.com/2024/9/6/3601ecbb-1538-4c91-8129-8ca1622f2a19.jpg'
                            width={50}
                            height={30}
                            className='mt-2 ml-2'
                            alt="logo"
                        />
                    </div>

                    <Form {...form}>
                        <form className="space-y-6" onSubmit={form.handleSubmit(handleSignup)}>
                            <FormField
                                name="username"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700">Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-gray-100 text-black"
                                                type="text"
                                                placeholder="John Doe"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                name="email"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-gray-100 text-black"
                                                type="email"
                                                placeholder="you@example.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="password"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700">Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-gray-100 text-black"
                                                type="password"
                                                placeholder="*****"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full py-2 rounded-md bg-sky-600 hover:bg-sky-700 text-white font-semibold transition duration-200"
                                disabled={isSubmit}
                            >
                                {isSubmit ? "Signing up..." : "Sign Up"}
                            </Button>
                        </form>
                    </Form>

                    <div className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href='/sign-in' className="text-sky-600 hover:underline">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page