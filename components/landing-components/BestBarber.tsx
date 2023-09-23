import { CSvgLocation, CSvgStar } from "@/icons"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"

 export const BestBarber = () => {
    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 500px)": {
                slides: { perView: 2, spacing: 10 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 10 },
            },
        },
        slides: { perView: 1 },
    })


    return (
        <section className="w-full   my-5 flex items-center justify-center pt-5">
            <div className="w-full max-w-[1400px]  flex flex-col items-center px-3">
                <span className="text-fresh-25 mb-3">Meet Our Professionals</span>
                <span className="mx-auto md:text-[30px] text-[20px]">Top Rated Barbers</span>
                <div ref={sliderRef} className="keen-slider py-10  md:mt-5 mt-0">
                    {new Array(10).fill("").map((item: any, index: number) =>
                        <div key={index} className="keen-slider__slide pb-5 shadow-barbers rounded-lg overflow-hidden relative ">
                            <img src="bg/card-bg.png" className="w-[50%] absolute top-0 left-0 opacity-60 z-[2]" alt='bg' />
                            <img src="bg/card-bg-2.png" className="w-[40%] absolute bottom-0 right-0 z-[2] opacity-70  " alt='bg' />
                            <div className="w-full h-full flex flex-wrap z-[2] relative lg:mx-5 mx-0">
                                <div className="lg:w-[80px] w-full ">
                                    <img src="barber/1.webp" className="w-[80px] h-[80px] mx-auto rounded-[15px] shadow object-cover object-center mt-7" alt='barber' />
                                </div>
                                <div className="lg:w-[calc(100%-80px)] w-full flex flex-col  lg:pt-7 pt-3 px-3">
                                    <h3 className="lg:text-xl text-lg">Mary Allen</h3>
                                    <span className="text-sm my-2 text-gray-500">Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor.</span>
                                    <div className="w-full flex items-center">
                                        <div className="flex lg:flex-row flex-col items-center">
                                            <div className="flex items-center">
                                                {new Array(5).fill("").map((item: any, index: number) =>
                                                    <CSvgStar key={index} className="w-[15px] fill-[gold]" />
                                                )}
                                                <span className="text-gray-400 text-sm mx-2">(32)</span>
                                            </div>
                                            <span className="lg:ml-3 ml-0 lg:mt-0 mt-2 text-fresh-25 lg:text-base text-sm">Available Today</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                        <CSvgLocation className="w-[15px] stroke-gray-400" />
                                        <span className="text-gray-500 ml-2 lg:text-base text-sm">G87P, Birmingham, UK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
