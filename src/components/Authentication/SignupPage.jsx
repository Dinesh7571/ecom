import { useState } from "react";
import user from "../../assets/user.webp";
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

import "./SignupPage.css";
import { signup } from "../../services/userServices";


const schema = z.object({
    name:z.string().min(3,{message:"Name should be at least 3 characters"}),
    email: z.string().email({message:"Enter valid email"}),
    password: z.string().min(8,{message:"Password must be 8 characters"}),
    confirmPassword:z.string(),
    deliveryAddress:z.string().min(15,{message:"Adress must be atleast 15 characters"})
}).refine(data=>data.password===data.confirmPassword,{
    message:"Confirm password does not match password.",
    path:["confirmPassword"]
})

const SignupPage = () => {
    
    const [profilePic, setProfilePic] = useState(null)
    const [formError, setFormError] = useState("")
    

    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm({resolver:zodResolver(schema)})

    const onSubmit = async(formData)=>{
        try {
           await signup(formData,profilePic) 
           

            window.location="/"
        } catch (err) {
            if (err.response && err.response.status ===400){
                setFormError(err.response.data.message);
            }
        }
      
    }

    

    return (
        <section className='align_center form_page'>
            <form
             onSubmit={handleSubmit(onSubmit)} 
             className='authentication_form signup_form'>
                <h2>SignUp Form</h2>

                <div className='image_input_section'>
                    <div className='image_preview'>
                        <img src={profilePic?URL.createObjectURL(profilePic):user} id='file-ip-1-preview' />
                    </div>
                    <label htmlFor='file-ip-1' className='image_label'>
                        Upload Image
                    </label>
                    <input onChange={e=>setProfilePic(e.target.files[0])} type='file' id='file-ip-1' className='image_input' />
                </div>

                {/* Form Inputs */}
                <div className='form_inputs signup_form_input'>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            id='name'
                            className='form_text_input'
                            type='text'
                            placeholder='Enter your name'
                            {...register("name")}
                        />
                       {errors.name && <em className="form_error">{errors.name.message}</em>}
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            className='form_text_input'
                            type='email'
                            placeholder='Enter your email address'
                            {...register("email")}
                        />
                         {errors.email && <em className="form_error">{errors.email.message}</em>}
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            className='form_text_input'
                            type='password'
                            placeholder='Enter your password'
                            {...register("password")}
                        />
                         {errors.password && <em className="form_error">{errors.password.message}</em>}
                    </div>

                    <div>
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <input
                           
                            id='cpassword'
                            className='form_text_input'
                            type='password'
                            placeholder='Enter confirm password'
                            {...register("confirmPassword")}
                        />
                         {errors.confirmPassword && <em className="form_error">{errors.confirmPassword.message}</em>}
                    </div>

                    <div className='signup_textares_section'>
                        <label htmlFor='address'>Delivery Address</label>
                        <textarea
                            id='address'
                            className='input_textarea'
                            placeholder='Enter delivery address'
                            {...register("deliveryAddress")}
                        />
                         {errors.deliveryAddress && <em className="form_error">{errors.deliveryAddress.message}</em>}
                    </div>
                </div>

                {formError && <em className="form_error">{formError}</em> }

                <button className='search_button form_submit' type='submit'>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default SignupPage;

// name - Name should be at least 3 characters.
// email - Please enter valid email
// password - Password must be at least 8 characters.
// confirmPassword - Confirm Password does not match Password
// deliveryAddress - Address must be at least 15 characters.
