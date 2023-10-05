import { useUserAddSalon } from "@/hooks/salon-hooks";
import { useState, useRef, useContext } from 'react'
import { methodHandelAddSalons } from '@/utils/salons-utils'
import { ContextContainer } from "@/context/ContextContainer";
import dynamic from "next/dynamic";
const SalonForm = dynamic(() => import("@/components/profile-cmponents/SalonForm"));
const UploadCover = dynamic(() => import("@/components/profile-cmponents/UploadCover"));

const AddSalonSection = () => {
    const Ctx = useContext(ContextContainer)
    const formRef: any = useRef()
    const [imageFile, setImageFile] = useState<any>(null)
    const { isLoading, mutate } = useUserAddSalon(setImageFile, Ctx.setProfileTab)


    const onSubmitForm = (e: any) => {
        e.preventDefault();
        methodHandelAddSalons(formRef, imageFile, mutate)
    }

    return (

        <div className="w-full flex flex-wrap mt-4">
            <div className="w-full h-fit border  rounded">
                <div className="w-full max-w-[400px]">
                    <SalonForm
                        formRef={formRef}
                        onSubmit={onSubmitForm}
                        isLoading={isLoading}
                    >
                        <UploadCover
                            imageFile={imageFile}
                            setImageFile={setImageFile}
                        />
                    </SalonForm>
                </div>
            </div>
        </div>


    )
}

export default AddSalonSection;
