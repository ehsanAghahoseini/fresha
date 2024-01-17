import { useKeenSlider } from "keen-slider/react"
import SalonsCards from "@/components/landing-components/SalonsCards";
import { useAllSalons } from "@/hooks/salon-hooks";
import dynamic from "next/dynamic";
import { useContext } from "react";
import { ContextContainer } from "@/context/ContextContainer";
import Link from "next/link";
const SkeletonSalon = dynamic(() => import('@/components/widget/Skeleton/SkeletonSalon'))

const BestSalons = ({ title }: any) => {
    const { data: salons, isLoading } = useAllSalons()
    const Ctx = useContext(ContextContainer)


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


    const handelViweDetail = (salon: any) => {
        Ctx.setSalonId(salon.id)
        Ctx.setVisibleDetail(true)
    }


    return (
        <section className="w-full md:my-5 my-2 flex items-center justify-center md:py-5 py-3">
            <div className="w-full max-w-[1200px]  flex flex-col items-center px-3">
                <div className="w-full flex md:flex-row flex-col md:justify-between justify-center md:items-end items-center">
                    <Link href={'/s'}>
                        <button className="w-[110px] h-[30px]  border border-fresh-25 text-fresh-25 text-sm rounded-full md:mt-0 mt-4 md:order-1 order-2">View All</button>
                    </Link>
                    <div className="flex flex-col text-center md:order-2 order-1">
                        <span className="text-fresh-25 mb-3">Meet Our Professionals</span>
                        <span className=" md:text-[30px] text-[20px] ">{title}</span>
                    </div>
                    <span className="w-[110px] md:flex hidden order-3"></span>
                </div>
                {!isLoading &&
                    <div ref={sliderRef} className="keen-slider py-5 md:mt-5 mt-0">
                        {salons?.data?.salons.map((item: any, index: number) =>
                            <SalonsCards
                                salon={item}
                                key={index}
                                index={index}
                                className="keen-slider__slide"
                            >
                                <button onClick={() => handelViweDetail(item)} className="w-[110px] h-[35px] text-sm bg-fresh-25 text-white rounded-full flex items-center justify-center">View Salons</button>
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