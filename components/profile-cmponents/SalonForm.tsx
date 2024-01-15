import { BtnLoader } from "@/components/widget";
import { FormSalonType } from "@/types/salons-types";
import { useEffect } from "react";


const SalonForm = ({ formRef, onSubmit, isLoading, children, defualtData }: FormSalonType) => {

    useEffect(() => {
        if (defualtData && defualtData != null) {
            formRef.current['name'].value = defualtData.name;
            formRef.current['short_description'].value = defualtData.short_description;
            formRef.current['description'].value = defualtData.description;
        }
    }, [defualtData])

    return (
        <form ref={formRef} onSubmit={onSubmit} className="w-full flex flex-col p-4 text-sm">
            <div className="w-full flex flex-col">
                <span className="text-gray-500">Salon Name</span>
                <input name='name' type="text" placeholder="Enter salon name" className="w-full h-[40px] mt-2 rounded-md border shadow px-2 focus:outline-none " required />
            </div>
            <div className="w-full flex flex-col mt-5">
                <span className="text-gray-500">Short Description</span>
                <input name='short_description' type="text" placeholder="Enter mini description" className="w-full h-[40px] mt-2 rounded-md border shadow px-2 focus:outline-none " required />
            </div>
            <div className="w-full flex flex-col mt-5">
                <span className="text-gray-500">Description</span>
                <textarea name='description' placeholder="Enter description" className="w-full h-[70px] mt-2 rounded-md border shadow p-2 focus:outline-none " required />
            </div>

            {children}

            {isLoading ?
                <button className="w-full h-[40px] bg-fresh-25 text-white flex items-center justify-center rounded my-5 relative"><BtnLoader /></button>
                :
                <button className="w-full h-[40px] bg-fresh-25 text-white flex items-center justify-center rounded my-5">Submit</button>
            }
        </form>
    )
}

export default SalonForm;
