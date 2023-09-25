import "keen-slider/keen-slider.min.css"
import dynamic from "next/dynamic";
const CImage = dynamic(() => import("@/components").then((mod) => mod.CImage), { ssr: false });

export const DownloadApp = () => {


    return (
        <section className="w-full  my-5 md:mt-20 mt-10 flex items-center justify-center pt-5">
            <div className="w-full max-w-[1400px]  flex flex-wrap items-center md:px-5 px-3">
                <div className="lg:w-[50%] w-full flex flex-col lg:order-1 order-2 lg:mt-0 mt-10">
                    <h4 className="lg:text-[40px] md:text-[30px] text-[20px]">Better Barbers , Better Salons , Everywhere</h4>
                    <span className="text-gray-500">
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                    </span>
                    {new Array(2).fill("").map((item: any, index: number) =>
                        <div key={index} className="w-full flex items-center mt-3">
                            <span className="flex border-2 border-fresh-25 rounded-full w-[13px] h-[13px] "></span>
                            <span className="text-sm font-bold ml-2 text-[#00224f]">Associates Insurance</span>
                        </div>
                    )}
                    <button className="w-[130px] h-[40px] mt-5 bg-fresh-25 text-white rounded-full flex items-center justify-center">
                        <span>Dowload App</span>
                    </button>
                </div>
                <div className="lg:w-[50%] w-full  flex items-center justify-center relative  lg:order-2 order-1">
                    {/* <img src="bg/circle.svg" className="w-[90%] h-auto absolute mx-auto z-[1] " alt='circle' /> */}
                    {/* <img src="bg/app.png" className="w-[80%] h-auto z-[2]" alt='app' /> */}
                    <CImage src="/bg/circle.svg" className="w-[90%] h-auto absolute mx-auto z-[1] " alt='circle' />
                    <CImage src="/bg/app.png" className="w-[80%] h-auto z-[2]" alt='app' />
                </div>
            </div>
        </section>
    )
}
