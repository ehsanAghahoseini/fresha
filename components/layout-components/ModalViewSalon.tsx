import dynamic from "next/dynamic";
import { ModalViewSalonType } from "@/types/salons-types";
import { useSingleSalons } from "@/hooks/salon-hooks";
import { useEffect } from "react";


const CModal = dynamic(() => import("@/components/widget/CModal"), { ssr: false });
const SkeletonDetailSalon = dynamic(() => import("@/components/widget/Skeleton/SkeletonDetailSalon"), { ssr: false });
const CImage = dynamic(() => import("@/components/widget").then((mod) => mod.CImage), { ssr: false });
const CSvgClose = dynamic(() => import("@/icons/CSvgClose"), { ssr: false });


const ModalViewSalon = ({ visible, setVisible, salonId }: ModalViewSalonType) => {
    const { isLoading, refetch, data: salon } = useSingleSalons(salonId)

    const handelClose = () => {
        setVisible(false)
    }

    useEffect(() => {
        if (salonId) {
            refetch()
        }
    }, [salonId])

    useEffect(()=>{
        console.log(salon?.data?.salon);
        
    },[salon])

    return (
        <>
            <CModal visible={visible} setVisible={setVisible} uId="view-salon"  >
                <>
                    <div className="w-full flex flex-col p-2">
                        {!isLoading && salon?.data?.salon &&
                            <>
                                <div className="w-full pt-[50%] relative">
                                    <button onClick={handelClose} className="w-[30px] h-[30px] absolute bg-gray-400 text-black top-2 right-2 flex items-center justify-center rounded-full z-[2] ">
                                        <CSvgClose className="w-[15px]" />
                                    </button>
                                    <CImage src={salon.data.salon.image_url} className="w-full h-full absolute top-0 object-cover object-center rounded" alt="cover" />
                                </div>
                                <h3 className="mt-2 text-xl">{salon.data.salon.name}</h3>
                                <span className="mt-2 text-sm text-gray-500">{salon.data.salon.short_description}</span>
                                <span className="mt-2 text-sm text-gray-500 text-justify">{salon.data.salon.description}</span>
                                <div className="w-full flex items-center justify-between mt-3 mb-2">
                                    <button className="w-[120px] h-[35px]   text-white bg-fresh-25 rounded-full">View site</button>
                                </div>
                            </>
                        }
                        {isLoading &&
                            <SkeletonDetailSalon />
                        }
                    </div>
                </>
            </CModal>
        </>
    )
}

export default ModalViewSalon;

