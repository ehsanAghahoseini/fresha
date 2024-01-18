import dynamic from "next/dynamic";
import { CSvgArrow, CSvgInsta, CSvgTelegram, CSvgTikTok, CSvgWhatsApp } from "@/icons"
const CSvgLogo = dynamic(() => import("@/icons/CSvgLogo"), { ssr: false });

 const Footer = () => {


    return (
        <section className="w-full bg-fresh-50 rounded-t-[30px] md:mt-40 mt-[110px] flex flex-col items-center justify-center pt-5">
            <div className="w-[90%] max-w-[1000px] px-4 min-h-[200px] py-4  flex flex-wrap items-center justify-between mt-[-120px] bg-white shadow-lg border rounded-2xl">
                <div className="md:w-[50%] w-full flex flex-col  justify-center items-center px-2">
                    <span className="md:text-xl text-lg text-gray-800">Join Our Newsletter</span>
                    <span className="text-gray-500 text-sm mt-2 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </span>
                </div>
                <div className="md:w-[50%] w-full md:mt-0 mt-4">
                    <form className="w-full flex flex-col items-center justify-center">
                        <span className="text-sm text-gray-700">Enter you email </span>
                        <input type="email" placeholder="Email Address" className="w-[250px] max-w-full h-[40px] rounded-full border mt-3 text-sm px-2 focus:outline-none" />
                        <button className="mt-2 w-[120px] h-[35px] bg-fresh-25 text-white text-sm rounded-full">Submit</button>
                    </form>
                </div>
            </div>
            <div className="w-full max-w-[1200px]  mt-10 flex flex-wrap items-center mb-5">
                <div className="md:w-6/12 w-full lg:w-3/12   flex flex-col p-2 mt-3">
                    <CSvgLogo className="w-[80px] " />
                    <span className="text-sm mt-2 leading-6 text-gray-600 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </span>
                    <div className="flex items-center mt-3">
                        <div className="w-[35px] h-[35px] rounded-full mr-2 flex items-center justify-center bg-fresh-25">
                            <CSvgTikTok className="w-[25px]" />
                        </div>
                        <div className="w-[35px] h-[35px] rounded-full mr-2 flex items-center justify-center bg-fresh-25">
                            <CSvgInsta className="w-[25px]" />
                        </div>
                        <div className="w-[35px] h-[35px] rounded-full mr-2 flex items-center justify-center bg-fresh-25">
                            <CSvgWhatsApp className="w-[25px]" />
                        </div>
                        <div className="w-[35px] h-[35px] rounded-full mr-2 flex items-center justify-center bg-fresh-25">
                            <CSvgTelegram className="w-[25px]" />
                        </div>
                    </div>
                </div>
                <div className="md:w-6/12 w-full lg:w-3/12   flex flex-col py-4 lg:pl-20 pl-5 mt-3">
                    <span className="text-xl text-gray-600">Useful Link</span>
                    {['Barbers', 'Salons', 'About us', 'Contact us'].map((item: any, index: number) =>
                        <div key={index} className="flex items-center text-sm mt-2 cursor-pointer">
                            <span><CSvgArrow className="w-3 fill-gray-700 rotate-180 mr-1" /></span>
                            <span className="">{item}</span>
                        </div>
                    )}
                </div>
                <div className="md:w-6/12 w-full lg:w-3/12   flex flex-col py-4 lg:pl-20 pl-5 mt-3">
                    <span className="text-xl text-gray-600">Useful Link</span>
                    {['Barbers', 'Salons', 'About us', 'Contact us'].map((item: any, index: number) =>
                        <div key={index} className="flex items-center text-sm mt-2 cursor-pointer">
                            <span><CSvgArrow className="w-3 fill-gray-700 rotate-180 mr-1" /></span>
                            <span className="">{item}</span>
                        </div>
                    )}
                </div>
                <div className="md:w-6/12 w-full lg:w-3/12   flex flex-col py-4 lg:pl-20 pl-5 mt-3">
                    <span className="text-xl text-gray-600">Contact Information</span>
                    {['Barbers', 'Salons', 'About us', 'Contact us'].map((item: any, index: number) =>
                        <div key={index} className="flex items-center text-sm mt-2 cursor-pointer">
                            <span><CSvgArrow className="w-3 fill-gray-700 rotate-180 mr-1" /></span>
                            <span className="">{item}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full h-[40px] border-t text-center text-gray-600 justify-center text-sm mt-5 flex flex-wrap items-center ">
                Copyright @2023 All Rights Reserved by Almubdieuntech
            </div>
        </section>
    )
}

export default Footer