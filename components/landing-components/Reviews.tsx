import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import dynamic from "next/dynamic";
const CImage = dynamic(() => import("@/components").then((mod) => mod.CImage), { ssr: false });

export const Reviews = () => {
    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 500px)": {
                slides: { perView: 2, spacing: 10 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 20 },
            },
        },
        slides: { perView: 1 },
    })


    return (
        <section className="w-full   my-5 md:mt-20 mt-10 flex items-center justify-center pt-5">
            <div className="w-full max-w-[1400px]  flex flex-col items-center px-3">
                <span className="mx-auto md:text-[30px] text-[20px]">Reviews</span>
                <div ref={sliderRef} className="keen-slider reviews-section py-10  ">
                    {new Array(10).fill("").map((item: any, index: number) =>
                        <div key={index} className="keen-slider__slide overflow-[visible !important] pb-5 shadow-barbers border-t-[4px] border-fresh-25 rounded-lg relative ">
                            <div className="w-full h-full  flex flex-col items-center relative ">
                                <div className="w-[70px] h-[70px] mt-[-30px] bg-white border-2 border-fresh-25 flex items-center justify-center rounded-full ">
                                    {/* <img src="barber/3.jpg" className="w-[60px] h-[60px]  rounded-full  shadow object-cover object-center " alt='avatar' /> */}
                                    <CImage src="/barber/3.jpg" className="w-[60px] h-[60px]  rounded-full  shadow object-cover object-center " alt='avatar' />

                                </div>
                                <span className="mt-2">Dylan Ambrose</span>
                                <span className="text-sm text-gray-400 mt-2">April 10, 2023</span>
                                <div className="w-full p-4 text-sm text-center text-gray-700">
                                    Great experience, easy to book. Paying for treatments is so convenient — no cash or cards needed!
                                    Great experience, easy to book. Paying for treatments is so convenient — no cash or cards needed!
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}