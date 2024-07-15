import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageTobase from "../helpers/ImageTobase";

import LoginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";




const SignUp = () => {  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name : "",
    confirmPassword :"",
    profilePic : ""
  });

  const loginhandler = (event) => {
    const { name, value } = event.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadPicHandler = async(event) => {
    const file = event.target.files[0]
    const imagePic = await ImageTobase(file)
     setData((preve) => {
      return {
        ...preve,
        profilePic : imagePic
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
  };

  console.log("data login", data);

  return (
    <section id="sign-up">
      <div className="mx-auto container p-4 ">
        <div className=" bg-white p-5 w-full max-w-sm mx-auto">
          <div className="h-20 w-20 mx-auto relative overflow-hidden rounded-full">
            <div>
                <img src={data.profilePic || LoginIcons} alt="login icon" />
            </div>
            <form>
              <label>
                <div className='text-xs bg-opacity-75 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                  Upload Photo
                </div>
                <input type="file" className="hidden" onChange={uploadPicHandler}/>
              </label>
            </form>
          </div>

          <form className="pt-8 flex flex-col gap-2" onSubmit={submitHandler}>
            <div className="grid">
              <label>Name : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={data.name}
                  onChange={loginhandler}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={data.email}
                  onChange={loginhandler}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  name="password"
                  value={data.password}
                  onChange={loginhandler}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />

                <div
                  className="cursor-pointer text-xl "
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <div>
              <label> Confirm Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-Enter Your Password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={loginhandler}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />

                <div
                  className="cursor-pointer text-xl "
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:bg-slate-950 scale-110 transition-all mx-auto block mt-6">Sign-Up</button>
          </form>
          <p className='pt-6'>Already have Account ! <Link  to={'/login/'} className= 'hover:text-red-600 hover:underline' >Sign in</Link></p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
