import { ContextContainer } from "@/context/ContextContainer";
import { CSvgMoreDot } from "@/icons";
import dynamic from "next/dynamic";
import { useContext } from "react";
const CImage = dynamic(() => import("@/components/widget").then((mod) => mod.CImage), { ssr: false });
const CSvgCardUser = dynamic(() => import("@/icons/CSvgCardUser"), { ssr: false });


const SideBar = () => {
    const Ctx = useContext(ContextContainer)

    return (

        <div className="md:w-[250px] w-full h-fit py-2 flex flex-col shadow border rounded">
            <div className="w-full flex items-center justify-end px-2 ">
                {/* <CSvgMoreDot className="w-[30px] stroke-gray-600" /> */}
            </div>
            <div className="w-full flex flex-col items-center justify-center mt-2">
                <CSvgCardUser className="stroke-gray-500 w-[90px]" />
                <h4 className="mt-2">{Ctx.userInfo?.name} {Ctx.userInfo?.last_name}</h4>
                <span className="text-sm text-gray-400 mt-1">{Ctx.userInfo?.email}</span>
            </div>
            <div className="w-full mt-7  border-t px-4 py-3 flex items-center">
                <div className="w-full flex flex-col items-center justify-center">
                    <span className="text-2xl">{Ctx.userInfo?.salons?.length}</span>
                    <span className="text-xs text-gray-400 mt-1">Salon</span>
                </div>
                {/* <div className="w-full flex flex-col items-center justify-center">
                    <span className="text-2xl">10</span>
                    <span className="text-xs text-gray-400 mt-1">Barbers</span>
                </div> */}
                {/* <div className="w-full flex flex-col items-center justify-center">
                    <span className="text-2xl">7</span>
                    <span className="text-xs text-gray-400 mt-1">USers</span>
                </div> */}
            </div>
            <div className="w-full border-t px-4 py-3 flex flex-col">
                <span className="text-sm">Palns days</span>
                <div className="w-full h-[7px] rounded-xl bg-gray-300 mt-2 shadow overflow-hidden flex items-center ">
                    <div className="w-[100%] bg-fresh-25 h-[5px] rounded-xl" />
                </div>
            </div>
            <div className="w-full text-sm mt-3  border-t px-4 pt-3 flex flex-col">
                {/* <div className="w-full my-2 flex items-center justify-between">
                    <span className=" text-gray-400">Shop</span>
                    <span>Test</span>
                </div> */}
                <div className="w-full my-2 flex items-center justify-between">
                    <span className=" text-gray-400">Status</span>
                    <span>Active</span>
                </div>
                {/* <div className="w-full my-2 flex items-center justify-between">
                    <span className=" text-gray-400">Status</span>
                    <span>Active</span>
                </div> */}
            </div>
        </div>

    )
}

export default SideBar;
