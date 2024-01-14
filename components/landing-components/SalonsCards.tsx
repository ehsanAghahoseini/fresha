import dynamic from "next/dynamic";
const CImage = dynamic(() => import("@/components/widget").then((mod) => mod.CImage), { ssr: false });

declare type SalonCardProps = {
    className?: string,
    index: number,
    salon: any,
    children: React.ReactNode
}

const SalonsCards = ({ index, className, salon, children }: SalonCardProps) => {

    return (
        <div key={index} className={` ${className} shadow-salons flex flex-col shadow rounded-lg overflow-hidden relative `}>
            <CImage src="/bg/card-bg.png" className="w-[60%] h-auto rotate-180 absolute bottom-0 right-0 z-[2] opacity-40  " alt='bg' />
            <div className="w-full pt-[50%] relative overflow-hidden">
                <CImage src={salon?.image_url} className="w-full h-full absolute top-0 object-cover object-center" alt='bg' />
            </div>
            <div className=" w-full flex flex-col px-5 py-2 relative">
                <h3 className="md:text-xl text-lg font-bold text-[#061a3a]">{salon.name}</h3>
                <div className="w-full flex items-center mt-4">
                    {/* <CImage src="/barber/2.jpg" className="w-[45px] h-[45px] rounded-full" alt='barber' /> */}

                    <span className="ml-2 font-bold text-sm text-gray-600">Eva Green</span>
                    <div className="ml-2 pl-2 border-l text-sm text-gray-400">
                        {salon.created_at?.slice(0,10)}
                    </div>
                </div>
                <span className="text-sm text-gray-400 my-3">{salon.short_description}</span>
                <div className="w-full  my-3">
                    {children}
                </div>
            </div>
        </div>

    )
}

export default SalonsCards