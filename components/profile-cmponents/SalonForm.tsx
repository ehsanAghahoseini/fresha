import { useUserAddSalon } from "@/hooks/salon-hooks";
import { CSvgTrash, CSvgUpload } from "@/icons";
import { useState, useRef, useContext } from 'react'
import { BtnLoader } from "..";
import { methodHandelAddBots } from '@/utils/salons-utils'
import { ContextContainer } from "@/context/ContextContainer";

const AddSalonSection = () => {
    const Ctx = useContext(ContextContainer)
    const formRef: any = useRef()
    const [imageFile, setImageFile] = useState<any>(null)
    const { isLoading, mutate } = useUserAddSalon(setImageFile, Ctx.setProfileTab)


    const onSubmitForm = (e: any) => {
        e.preventDefault();
        methodHandelAddBots(formRef, imageFile, mutate)
    }

    return (

        <div className="w-full flex flex-wrap mt-4">
            <div className="w-full h-fit border  rounded">
                <div className="w-full max-w-[400px]">
                    <form ref={formRef} onSubmit={onSubmitForm} className="w-full flex flex-col p-4 text-sm">
                        <div className="w-full flex flex-col">
                            <span className="text-gray-500">Salon Name</span>
                            <input name='name' type="text" placeholder="Enter salon name" className="w-full h-[40px] mt-2 rounded-md border shadow px-2 focus:outline-none " />
                        </div>
                        <div className="w-full flex flex-col mt-5">
                            <span className="text-gray-500">Short Description</span>
                            <input name='short_description' type="text" placeholder="Enter mini description" className="w-full h-[40px] mt-2 rounded-md border shadow px-2 focus:outline-none " />
                        </div>
                        <div className="w-full flex flex-col mt-5">
                            <span className="text-gray-500">Description</span>
                            <textarea name='description' placeholder="Enter description" className="w-full h-[70px] mt-2 rounded-md border shadow p-2 focus:outline-none " />
                        </div>
                        <div className="w-full pt-[50%] mt-5 relative">
                            {imageFile == null ?
                                <label className="w-full h-full top-0 absolute cursor-pointer border border-dashed rounded border-gray-400 flex items-center justify-center flex-col">
                                    <CSvgUpload className="w-[40px] stroke-gray-500" />
                                    <span className="text-gray-500 mt-3 cursor-pointer">Select Cover</span>
                                    <input type="file" className="hidden" onChange={(e) => { setImageFile(e?.target?.files?.[0]) }} />
                                </label>
                                :
                                <div className="w-full h-full top-0 absolute  overflow-hidden rounded">
                                    <img src={URL.createObjectURL(imageFile)} className="w-full h-full rounded object-cover object-center" />
                                    <button type="button" onClick={() => { setImageFile(null) }} className="w-[30px] h-[30px] absolute right-3 top-3 bg-[tomato] rounded flex items-center justify-center">
                                        <CSvgTrash className="w-[20px] stroke-slate-100" />
                                    </button>
                                </div>
                            }
                        </div>
                        {isLoading ?
                            <button className="w-full h-[40px] bg-fresh-25 text-white flex items-center justify-center rounded my-5 relative"><BtnLoader /></button>
                            :
                            <button className="w-full h-[40px] bg-fresh-25 text-white flex items-center justify-center rounded my-5">Submit</button>
                        }
                    </form>
                </div>
            </div>
        </div>


    )
}

export default AddSalonSection;
