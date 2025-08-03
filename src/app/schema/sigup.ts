import z from "zod";
export const username_validation=z.string()
                                .min(1,"User name mini minimum 1 charectar")
                                .max(10,"Useranme must be with in 10 charectar")

export const email_validation =z.string()
                              .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email address")

export const password_validation = z.string()
                                   .min(6,"Must be 6 charectar long")
export const signup_validation = z.object({
    username:username_validation,
    email:email_validation,
    password:password_validation
})