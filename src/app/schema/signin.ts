import z from "zod";

export const email_validation =z.string()
                              .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email address")
export const password_validation =  z.string()
                                   .min(6,"Must be 6 charectar long")


export const sign_in_validation = z.object({
    email:email_validation,
    password:password_validation
})