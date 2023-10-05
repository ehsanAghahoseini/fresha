import { useKeenSlider } from "keen-slider/react"
import SalonsCards from "@/components/landing-components/SalonsCards";
import { useAllSalons } from "@/hooks/salon-hooks";
import dynamic from "next/dynamic";
import BestBarber from "./BestBarber";
const SkeletonSalon = dynamic(() => import('@/components/widget/Skeleton/SkeletonSalon'))

const BestSalons = ({ title }: any) => {
    const { data: salons, isLoading } = useAllSalons()

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
                {!isLoading &&
                    <div ref={sliderRef} className="keen-slider py-5 md:mt-5 mt-0">
                        {salons?.data?.salons.map((item: any, index: number) =>
                            <SalonsCards
                                salon={item}
                                key={index}
                                index={index}
                                className="keen-slider__slide"
                            >
                                <button className="w-[110px] h-[35px] text-sm bg-fresh-25 text-white rounded-full flex items-center justify-center">View Salons</button>
                            </SalonsCards>
                        )}
                    </div>
                }
                {isLoading &&
                    <SkeletonSalon />
                }
            </div>
        </section>
    )
}


export default BestSalons