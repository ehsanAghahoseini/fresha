import dynamic from "next/dynamic";
import { UploadCoverType } from "@/types/salons-types";
const CSvgTrash = dynamic(() => import("@/icons/CSvgTrash"), { ssr: false });
const CSvgUpload = dynamic(() => import("@/icons/CSvgUpload"), { ssr: false });


const UploadCover = ({ imageFile, setImageFile }: UploadCoverType) => {

    return (

        <div className="w-full pt-[50%] mt-5 relative">
            {imageFile == null ?
                <label className="w-full h-full top-0 absolute cursor-pointer border border-dashed rounded border-gray-400 flex items-center justify-center flex-col">
                    <CSvgUpload className="w-[40px] stroke-gray-500" />
                    <span className="text-gray-500 mt-3 cursor-pointer">Select Cover</span>
                    <input type="file" className="hidden" onChange={(e) => { setImageFile(e?.target?.files?.[0]) }} />
                </label>
                :
                <div className="w-full h-full top-0 absolute  overflow-hidden rounded">
                    <img src={typeof imageFile == 'string' ? imageFile : URL.createObjectURL(imageFile)} className="w-full h-full rounded object-cover object-center" />
                    <button type="button" onClick={() => { setImageFile(null) }} className="w-[30px] h-[30px] absolute right-3 top-3 bg-[tomato] rounded flex items-center justify-center">
                        <CSvgTrash className="w-[20px] stroke-slate-100" />
                    </button>
                </div>
            }
        </div>

    )
}

export default UploadCover;
