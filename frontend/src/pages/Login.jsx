import React, { useState } from 'react'
import LoginIcons from '../assest/signin.gif'
import { Link } from 'react-router-dom';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email : "",
        password : ""
    })

    const loginhandler = (event) => {
        const {name, value} = event.target
        setData((preve)=> {
            return{
                ...preve,
                [name] : value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
    }

    console.log("data login", data);
  return (

    <section id='login'>
      <div className='mx-auto container p-5 '>
          
          <div className=' bg-white p-5 w-full max-w-sm mx-auto rounded'>
              <div className='h-20 w-20 mx-auto'>
                <img src={LoginIcons} alt="login icon" />
              </div>

              <form className='pt-8' onSubmit={submitHandler}>
                <div className='grid'>
                    <label>Email : </label> 
                    <div className='bg-slate-100 p-2'>
                        <input 
                        type="email" 
                        placeholder='Enter Your Email' 
                        name='email'
                        value={data.email}
                        onChange={loginhandler}
                        className='w-full h-full outline-none bg-transparent'/>
                    </div>
                </div>

                <div>
                    <label>Password : </label> 
                    <div className='bg-slate-100 p-2 flex'>
                        <input 
                        type={showPassword ? "text": "password"} 
                        placeholder='Enter Your Password' 
                        name='password'
                        value={data.password}
                        onChange={loginhandler}
                        className='w-full h-full outline-none bg-transparent'/>

                        <div className='cursor-pointer text-xl ' onClick={()=> setShowPassword((prev)=>!(prev))}>
                            <span>
                                {
                                    showPassword ? (<FaEyeSlash />):(<FaEye />)
                                }                                                               
                            </span>
                        </div>
                    </div>
                    <Link to={'/forgot-password/'} className='block w-fit ml-auto hover:underline hover: text-red-600'>
                        Forgot Password ?
                    </Link>
                </div>

                <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:bg-slate-950 scale-110 transition-all mx-auto block mt-6'>Login</button>

              </form>
              <p className='pt-6'>Don't have Account ! <Link  to={'/sign-up/'} className= 'hover:text-red-600 hover:underline' >Sign Up</Link></p>
          </div>
      </div>
    </section>
  )
}

export default Login