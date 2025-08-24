"use client"
import React,{use, useState} from "react"
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { sign_in_validation } from "@/app/schema/signin"
import { Input } from "@/components/ui/input"
import {useForm} from "react-hook-form"
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

const Loginpage = () => {
    const [isSubmit, setisSubmit] = useState<boolean>(false)
    const [resM,setresM] = useState<string>("")
    const backEnd_url = process.env.BACKEND_URL
    const form = useForm<z.infer<typeof sign_in_validation>>({
        resolver:zodResolver(sign_in_validation),
        defaultValues:{
            email:"",
            password:""
        }
    })

    const handle_sing_in =async(data:z.infer<typeof sign_in_validation>)=>{
        try {
            setisSubmit(true);
            const response = await axios.post(`${backEnd_url}/user/admin/login`,data,{
                headers:{"Content-Type":"application/json"}
            })
            if(response.data.status==200) {
                //process the next
            }
        } catch (error) {
            
        }

    } 
  return (
    <div>
      
    </div>
  )
}

export default Loginpage
