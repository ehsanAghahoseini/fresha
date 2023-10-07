import SkeletonBase from "./SkeletonBase"

const SkeletonDetailSalon = () => {



    return (
        <>
            <div className="w-full pt-[50%] relative">
                <div className="w-full h-full absolute top-0 object-cover object-center rounded" >
                    <SkeletonBase />
                </div>
            </div>
            <div className="w-[120px] h-[28px] mt-3 text-xl"><SkeletonBase/></div>
            <div className="mt-4 flex flex-col">
                <div className="w-full h-[14px] rounded-md relative overflow-hidden"><SkeletonBase/></div>
                <div className="w-full mt-1 h-[14px] rounded-md relative overflow-hidden"><SkeletonBase/></div>
                <div className="w-full mt-1 h-[14px] rounded-md relative overflow-hidden"><SkeletonBase/></div>
                <div className="w-full mt-1 h-[14px] rounded-md relative overflow-hidden"><SkeletonBase/></div>
            </div>
            <div className="w-full flex items-center justify-between mt-3 mb-2">
                <div className="w-[120px] h-[35px] rounded-full relative overflow-hidden"><SkeletonBase/></div>
            </div>
        </>
    )
}

export default SkeletonDetailSalon