"use client"
import React, { useState } from "react"
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { sign_in_validation } from "@/app/schema/signin"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import z from "zod"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Toastalert from "@/app/components/Toastalert"
const Loginpage = () => {
    const [isSubmit, setisSubmit] = useState<boolean>(false)
    const [resM, setresM] = useState<string>("")
    const backEnd_url = "http://127.0.0.1:8000"
    const router = useRouter()

    const form = useForm<z.infer<typeof sign_in_validation>>({
        resolver: zodResolver(sign_in_validation),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const handle_sing_in = async (data: z.infer<typeof sign_in_validation>) => {
        try {
            setresM("")
            setisSubmit(true);
            const response = await axios.post(`${backEnd_url}/user/admin/log_in`, data, {
                headers: { "Content-Type": "application/json" }
            })
            if (response.data.status == 200) {
                setresM(response.data.message)
                setTimeout(() => {
                    router.push("/analyzer")
                }, 2000);
            }
        } catch (error) {
            setresM("⚠️ Server is busy, please try again later.")
        } finally {
            setisSubmit(false);
        }
    }

    return (
        <div className="min-h-screen flex bg-gray-700">
            {/* Left 1/3 - empty or spacer */}
            <div className="w-1/15"></div>

            {/* Center 1/3 - Form */}
            <div className="w-1/3 flex items-center justify-center">
            
                <div
                    className="w-full bg-gradient-to-r from-green-200 to-yellow-200 p-8 rounded-2xl shadow-lg" 
                >
                    {resM && <Toastalert message={resM}/>}
                    <h1 className="text-4xl font-bold text-center mb-6 text-white-800">
                        Sign In
                    </h1>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handle_sing_in)} className="space-y-6">
                            {/* Email Field */}
                            <FormField
                                name="email"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-gray-100 text-black focus:ring-2 focus:ring-blue-500"
                                                type="email"
                                                placeholder="Enter your email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password Field */}
                            <FormField
                                name="password"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700">Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-gray-100 text-black focus:ring-2 focus:ring-blue-500"
                                                type="password"
                                                placeholder="Enter your password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Submit Button */}
                            <Button
                                disabled={isSubmit}
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all"
                            >
                                {isSubmit ? "Processing..." : "Sign In"}
                            </Button>
                            <h2>Don't have an account   <Link href="/sign-up" className="text-blue-500">Sign up</Link></h2>
                        </form>
                    </Form>
                </div>
                 <div className="w-1/10"></div>

            </div>

            {/* Right 1/3 - Image */}
            <div className="w-2/3 flex items-center justify-center">
                <img
                    src="https://cdn-thumbnails.huggingface.co/social-thumbnails/spaces/hudsonhayes/AI_Resume_Analyzer.png"
                    alt="Background"
                    className="object-cover h-full w-full rounded-2xl shadow-lg"
                />
            </div>
        </div>

    )
}

export default Loginpage