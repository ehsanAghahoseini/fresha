import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import dynamic from "next/dynamic";
import { SalonsCards } from "@/components";


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
                        <SalonsCards key={index} index={index} className="keen-slider__slide" />
                    )}
                </div>
            </div>
        </section>
    )
}