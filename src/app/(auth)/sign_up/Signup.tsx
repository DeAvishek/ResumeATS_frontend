"use client"
import React, { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { signup_validation } from "@/app/schema/sigup"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
const Signup = () => {
    const [isSubmti, setisSubmti] = useState<boolean>(false)
    const [responseM, setResponseM] = useState<string>("")

    const form = useForm<z.infer<typeof signup_validation>>({
        resolver: zodResolver(signup_validation),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        }

    })



    return (
        <>
            <Form {...form}>
                <form className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Username" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Username" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}

export default Signup