import {  useRegister } from "@/hooks/auth-hooks";
import { useContext, useRef } from "react";
import { BtnLoader } from "@/components/widget";
import { FormAuthType } from "@/types/auth-types";
import { ContextContainer } from "@/context/ContextContainer";

export const RegisterForm = ({setVisibleModal}:FormAuthType) => {
    const formRef: any = useRef()
    const Ctx = useContext(ContextContainer)
    const { isLoading, mutate } = useRegister(formRef , setVisibleModal , Ctx.setIsAuth , Ctx.setUserInfo)


    const handelRegister = (e: any) => {
        e.preventDefault();
        mutate()
    }

    return (
        <>
            <form ref={formRef} onSubmit={handelRegister} className={`w-full flex flex-col pt-[20px]  `}>
                <div className="w-full flex flex-col">
                    <span className="text-xs mb-2 text-gray-500 ml-2 ">Name</span>
                    <input name='name' type="text" placeholder="Enter your name " className="w-full h-[40px] rounded-full border border-gray-300 px-[10px] focus:outline-none text-sm" required />
                </div>
                <div className="w-full flex flex-col mt-5">
                    <span className="text-xs mb-2 text-gray-500 ml-2 ">Family</span>
                    <input name='last_name' type="text" placeholder="Enter your family " className="w-full h-[40px] rounded-full border border-gray-300 px-[10px] focus:outline-none text-sm" required />
                </div>
                <div className="w-full flex flex-col mt-5">
                    <span className="text-xs mb-2 text-gray-500 ml-2 ">Email Address</span>
                    <input name='email' type="text" placeholder="Enter your email " className="w-full h-[40px] rounded-full border border-gray-300 px-[10px] focus:outline-none text-sm" required />
                </div>
                <div className="w-full flex flex-col mt-5">
                    <span className="text-xs mb-2 text-gray-500 ml-2 ">Password</span>
                    <input name='password' type="password" placeholder="min.8 char  " className="w-full h-[40px] rounded-full border border-gray-300 px-[10px] focus:outline-none text-sm" required />
                </div>
                {isLoading ?
                    <button type="button" className="w-full h-[40px] bg-fresh-25 text-white text-sm rounded-full mt-10 flex items-center justify-center relative"><BtnLoader/></button>
                    :
                    <button type="submit" className="w-full h-[40px] bg-fresh-25 text-white text-sm rounded-full mt-10">Submit</button>
                }
            </form>
        </>
    )
}


export default RegisterForm;
