import { CSvgArrow, CSvgLocation, CSvgStar } from "@/icons"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"

export const BestSalons = ({ title }: any) => {
    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 500px)": {
                slides: { perView: 2, spacing: 10 },
            },
            "(min-width: 800px)": {
                slides: { perView: 3, spacing: 10 },
            },
            "(min-width: 1100px)": {
                slides: { perView: 4, spacing: 15 },
            },
        },
        slides: { perView: 1 },
    })


    return (
        <section className="w-full md:my-5 my-2 flex items-center justify-center md:py-5 py-3">
            <div className="w-full max-w-[1400px]  flex flex-col items-center px-3">
                <span className="text-fresh-25 mb-3">Meet Our Professionals</span>
                <span className="mx-auto md:text-[30px] text-[20px] ">{title}</span>
                <div ref={sliderRef} className="keen-slider py-5 md:mt-5 mt-0">
                    {new Array(8).fill("").map((item: any, index: number) =>
                        <div key={index} className="keen-slider__slide shadow-salons flex flex-col shadow rounded-lg overflow-hidden relative ">
                            <img src="bg/card-bg.png" className="w-[60%] rotate-180 absolute bottom-0 right-0 z-[2] opacity-40  " />
                            <div className="w-full pt-[50%] relative overflow-hidden">
                                <img src={`salons/${index + 1}.avif`} className="w-full h-full absolute top-0 object-cover object-center" />
                            </div>
                            <div  className=" w-full flex flex-col px-5 py-2 relative">
                                <h3 className="md:text-xl text-lg font-bold text-[#061a3a]">BarberSmiths Marylebone</h3>
                                <div className="w-full flex items-center mt-4">
                                    <img src="barber/2.jpg" className="w-[45px] h-[45px] rounded-full" />
                                    <span className="ml-2 font-bold text-sm text-gray-600">Eva Green</span>
                                    <div className="ml-2 pl-2 border-l text-sm text-gray-400">
                                        April 10, 2023
                                    </div>
                                </div>
                                <span className="text-sm text-gray-400 my-3">Lorem ipsum dolor sit amet consectetur adipisicing sed.</span>
                                <button className="w-[110px] h-[35px] text-sm bg-fresh-25 text-white rounded-full my-3 flex items-center justify-center">View Salons</button>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}