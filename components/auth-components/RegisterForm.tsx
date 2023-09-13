import { useRouter } from "next/router";

export const RegisterForm = () => {
    const router = useRouter()

    const handelRegister=(e:any)=>{
        e.preventDefault();
        router.push('/p')
    }

    return (
        <>
           <form onSubmit={handelRegister} className={`w-full flex flex-col pt-[20px]  `}>
                <div className="w-full flex flex-col">
                    <span className="text-xs mb-2 text-gray-500 ml-2 ">Name</span>
                    <input type="text" placeholder="Enter your name " className="w-full h-[40px] rounded-full border border-gray-300 px-[10px] focus:outline-none text-sm" />
                </div>
                <div className="w-full flex flex-col mt-5">
                    <span className="text-xs mb-2 text-gray-500 ml-2 ">Family</span>
                    <input type="text" placeholder="Enter your family " className="w-full h-[40px] rounded-full border border-gray-300 px-[10px] focus:outline-none text-sm" />
                </div>
                <div className="w-full flex flex-col mt-5">
                    <span className="text-xs mb-2 text-gray-500 ml-2 ">Email Address</span>
                    <input type="text" placeholder="Enter your email " className="w-full h-[40px] rounded-full border border-gray-300 px-[10px] focus:outline-none text-sm" />
                </div>
                <div className="w-full flex flex-col mt-5">
                    <span className="text-xs mb-2 text-gray-500 ml-2 ">Password</span>
                    <input type="password" placeholder="min.8 char  " className="w-full h-[40px] rounded-full border border-gray-300 px-[10px] focus:outline-none text-sm" />
                </div>
                <button className="w-full h-[40px] bg-fresh-25 text-white text-sm rounded-full mt-10">Submit</button>
            </form>
        </>
    )
}


export default RegisterForm ;
