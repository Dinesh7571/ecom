import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

import './LoginPage.css'

const schema = z.object({
    email: z.string().email({message:"Enter valid email"}).min(3),
    password: z.string().min(8)
})

const LoginPage = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) })

    const onSubmit = formData => console.log(formData)

    return (
        <section className="align_center form_page">
            <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Login Form</h2>
                <div className="form_inputs">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id='email'
                            className="form_text_input"
                            placeholder='Enter your email'
                            {...register("email")}
                        />
                        {errors.email &&
                            <em className="form_error">
                                {errors.email.message}
                            </em>}

                        <label htmlFor="password" >Password</label>
                        <input
                            type="password"
                            id='password'
                            className="form_text_input"
                            placeholder='Enter your password'
                            {...register("password")}
                        />
                        {errors.password &&
                            <em className="form_error">
                                {errors.password.message}
                            </em>}
                        <button type='submit' className="search_button form_submit">Submit</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default LoginPage