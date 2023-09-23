import { useLogin } from "@/hooks";
import { useRef } from 'react'
import { BtnLoader } from "@/components";


export const LoginForm = ({setVisibleModal}:any) => {
    const formRef: any = useRef()
    const { isLoading, mutate } = useLogin(formRef , setVisibleModal)


    const handelLogin = (e: any) => {
        e.preventDefault();
        mutate()
    }

    return (
        <>
            <form ref={formRef} onSubmit={handelLogin} className={`w-full flex flex-col pt-[30px]  `}>
                <div className="w-full flex flex-col">
                    <span className="text-xs mb-2 text-gray-500 ml-2 ">Email Address</span>
                    <input name="email" type="text" placeholder="Enter your email " className="w-full h-[40px] rounded-full border border-gray-300 px-[10px] focus:outline-none text-sm" required />
                </div>
                <div className="w-full flex flex-col mt-5">
                    <span className="text-xs mb-2 text-gray-500 ml-2 ">Password</span>
                    <input name='password' type="password" placeholder="min.8 char  " className="w-full h-[40px] rounded-full border border-gray-300 px-[10px] focus:outline-none text-sm" required />
                </div>
                {isLoading ?
                    <button type="button" className="w-full h-[40px] bg-fresh-25 text-white text-sm rounded-full mt-10 flex items-center justify-center relative"><BtnLoader /></button>
                    :
                    <button type="submit" className="w-full h-[40px] bg-fresh-25 text-white text-sm rounded-full mt-10">Submit</button>
                }
                <div className="w-full flex flex-col mt-10">
                    <div className="w-full relative border-t flex justify-center ">
                        <span className="bg-white -mt-[14px] flex w-[40px] justify-center">or</span>
                    </div>
                    <div className="w-full flex items-center justify-between mt-4 text-xs px-2">
                        <span className="cursor-pointer">Do you have an account ?</span>
                        <span className="text-blue-500 cursor-pointer">forget password ?</span>
                    </div>
                </div>
            </form>
        </>
    )
}


export default LoginForm;