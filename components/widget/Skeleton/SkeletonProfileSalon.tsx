import SkeletonBase from "./SkeletonBase"

const SkeletonProfileSalon = ({ }: any) => {



    return (
        <>
            <div className={`w-full shadow-salons flex flex-col shadow rounded-lg overflow-hidden relative  `}>
                <div className="w-full pt-[50%] relative overflow-hidden">
                    <div className="w-full h-full absolute top-0 "><SkeletonBase /></div>
                </div>
                <div className=" w-full flex flex-col px-5 py-2 relative">
                    <div className="w-[100px] h-[28px]"><SkeletonBase /></div>
                    <div className="w-full flex items-center mt-4">
                        <div className="w-[45px] h-[45px] rounded-full relative overflow-hidden">
                            <SkeletonBase />
                        </div>
                        <div className="ml-2 w-[67px] h-[20px] overflow-hidden relative"><SkeletonBase /></div>
                        <div className="ml-2 pl-2 w-[96px] h-[20px] relative overflow-hidden">
                            <SkeletonBase />
                        </div>
                    </div>
                    <div className="w-[60%] flex flex-col my-3">
                        <div className="w-full h-[18px]  relative overflow-hidden"><SkeletonBase /></div>
                        <div className="w-full h-[18px] mt-1 relative overflow-hidden"><SkeletonBase /></div>
                    </div>
                    <div className="w-[110px] h-[35px] text-sm text-white rounded-full my-3 flex items-center justify-center relative overflow-hidden"><SkeletonBase /></div>
                </div>
            </div>
        </>

    )
}

export default SkeletonProfileSalon