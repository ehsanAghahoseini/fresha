import { useState } from "react";
import CModal from "../widget/CModal";
import { CSvgLogo } from "@/icons";
import dynamic from 'next/dynamic'

const LoginForm = dynamic(() => import('./LoginForm') ,{ssr:false})
const RegisterForm = dynamic(() => import('./RegisterForm'),{ssr:false})

export const ModalAuth = ({visible , setVisible}:any) => {
    const [authType, setAuthType] = useState<string>('login')        

    const handelChangeAuth=(type:string)=>{
        setAuthType(type)
    }

    return (
        <>
            <CModal visible={visible} setVisible={setVisible} uId="auth" className="w-[800px!important] " >
                <div className="w-full flex items-center">
                    <div className='w-full  md:h-[600px] h-full   bg-white flex flex-wrap overflow-hidden rounded-md'>
                        <div className='w-full md:w-6/12 h-full relative md:flex hidden overflow-hidden '>
                            <span className='absolute left-0 right-0 bottom-0 top-0  z-[2]'></span>
                            <img src="auth/1.jpg" className={`w-full h-full object-cover object-center absolute transition-all duration-700 ${authType == 'login' ? 'z-[1] top-0 opacity-100' : 'z-[-1] top-[-20px] opacity-0'}`} alt='auth' />
                            <img src="auth/2.avif" className={`w-full h-full object-cover object-center absolute transition-all duration-700 ${authType == 'register' ? 'z-[1] top-0 opacity-100' : 'z-[-1] top-[-20px] opacity-0'}`} alt='auth' />
                        </div>
                        <div className='w-full md:w-6/12 h-full p-[20px]'>
                            <div className='w-full flex flex-col m-auto max-w-[400px] '>
                                <div className='w-full flex flex-col items-center justify-center '>
                                    <CSvgLogo className="md:w-[80px] w-[70px]" />
                                    <span className='my-2'>Welcome to Fresha</span>
                                    <div className="w-[200px] h-[40px] flex items-center justify-between rounded-full border shadow mt-4 p-1">
                                        <button onClick={() => handelChangeAuth('login')} type="button" className={`w-full h-full bg-pos-100 rounded-full flex items-center justify-center transition-all text-xs ${authType == 'login' ? 'bg-fresh-25 text-white ' : 'bg-white '}`}>Login</button>
                                        <button onClick={() => handelChangeAuth('register')} type="button" className={`w-full h-full bg-pos-100 rounded-full flex items-center justify-center transition-all text-xs ${authType == 'register' ? 'bg-fresh-25 text-white ' : 'bg-white'}`}>Register</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full  flex flex-col relative overflow-hidden">
                                {authType == 'login' ?
                                    <LoginForm setVisible={setVisible} />
                                    :
                                    <RegisterForm setVisible={setVisible} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </CModal>
        </>
    )
}