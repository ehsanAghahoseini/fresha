import { CSvgLocation, CSvgSearch, CSvgCalender, CSvgClock } from "@/icons"
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useRef } from "react";
const CImage = dynamic(() => import("@/components/widget").then((mod) => mod.CImage), { ssr: false });

const Slider = () => {
    const router = useRouter()
    const formRef: any = useRef()

    const handelSubmit = (e: any) => {
        e.preventDefault()
        let name = formRef.current['name'].value.trim();
        if (name.length > 0) {
            router.push(`/s?name=${name}`)
        }
    }

    return (
        <section className="w-full md:min-h-screen min-h-fit bg-slider bg-fresh-50  rounded-b-[30px] flex items-center justify-center md:pt-0 pt-[70px]">
            <div className="w-full max-w-[1200px]  flex flex-wrap justify-between items-center px-5 overflow-hidden">
                <div className="md:w-[55%] w-full flex flex-col order-2 md:order-1 md:mt-0 mt-5">
                    <h1 className="lg:text-[45px] md:text-[30px] text-[20px] text-center md:mb-6 mb-3 flex flex-col font-bold">
                        <span>Book local beauty and </span>
                        <span><span className="text-fresh-25">wellness</span> services</span>
                    </h1>
                    {/* <span className="text-gray-500 md:mb-5 mb-3 md:text-base text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span> */}
                    {/* <button className="w-[140px] h-[40px] mb-5 rounded-lg border border-fresh-25 text-fresh-25 flex items-center justify-center font-bold transition-all bg-transparent hover:bg-fresh-25 hover:text-white">Start a Consult</button> */}
                    <form ref={formRef} onSubmit={handelSubmit} className="w-full py-4 px-2 shadow rounded-xl bg-white flex flex-wrap items-center mb-5">
                        <div className="md:w-[calc(100%-80px)] w-full flex flex-wrap items-center">

                            <div className=" w-full h-[40px] lg:mb-0 flex items-center pr-1 ">
                                <div className="w-[30px] h-[30px] flex items-center justify-center">
                                    <CSvgSearch className="w-[22px] stroke-gray-400" />
                                </div>
                                <input name="name" className="w-[calc(100%-30px)] h-[40px] pl-1 text-sm border-none focus:outline-none" placeholder="Search Salon" required />
                            </div>

                            {/* <div className="lg:w-[50%] md:w-[50%] w-full h-[40px] lg:mb-0 mb-2  md:border-b-0 border-b flex items-center pr-1 ">
                                <div className="w-[30px] h-[30px] flex items-center justify-center">
                                    <CSvgLocation className="w-[22px] stroke-gray-400" />
                                </div>
                                <input className="w-[calc(100%-30px)] h-[40px] pl-1 text-sm border-none focus:outline-none" placeholder="Location" />
                            </div> */}

                            {/* <div className="lg:w-[25%] md:w-[50%] w-full h-[40px] md:mb-0 mb-2 md:border-r border-r-0 md:border-b-0 border-b flex items-center pr-1 ">
                                <div className="w-[30px] h-[30px] flex items-center justify-center">
                                    <CSvgCalender className="w-[22px] fill-gray-400" />
                                </div>
                                <input className="w-[calc(100%-30px)] h-[40px] pl-1 text-sm border-none focus:outline-none" placeholder="Date" />
                            </div> */}

                            {/* <div className="lg:w-[25%] md:w-[50%] w-full h-[40px]  flex items-center pr-1 ">
                                <div className="w-[30px] h-[30px] flex items-center justify-center">
                                    <CSvgClock className="w-[22px] stroke-gray-400" />
                                </div>
                                <input className="w-[calc(100%-30px)] h-[40px] pl-1 text-sm border-none focus:outline-none" placeholder="Time" />
                            </div> */}
                        </div>
                        <button aria-label="start" className="md:w-[80px] w-full md:mt-0 mt-4 md:h-[40px] h-[35px] bg-fresh-25 rounded-md text-white text-sm">Search</button>
                    </form>
                </div>
                <div className="slider md:w-[40%] w-full md:max-w-[550px] max-w-[300px] relative md:pt-[35%] pt-[70%] border md:mx-[0] mx-auto overflow-hidden order-1 md:order-2">
                    {/* <img src="slider/slider.webp" className="w-full h-full object-cover object-center" alt='banner' /> */}
                    <CImage src={"/slider/slider.webp"} className="w-full h-full absolute top-0 object-cover object-center" alt="banner" />
                </div>
            </div>
        </section>
    )
}


export default Slider