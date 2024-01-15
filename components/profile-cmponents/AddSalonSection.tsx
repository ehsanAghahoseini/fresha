import { useUserAddSalon } from "@/hooks/salon-hooks";
import { useState, useRef, useContext } from 'react'
import { methodHandelSubmitSalons } from '@/utils/salons-utils'
import { ContextContainer } from "@/context/ContextContainer";
import dynamic from "next/dynamic";
const SalonForm = dynamic(() => import("@/components/profile-cmponents/SalonForm"));
const UploadCover = dynamic(() => import("@/components/profile-cmponents/UploadCover"));
const ProfileMap: any = dynamic(() => import('@/components/profile-cmponents/ProfileMap'), {
    ssr: false
})

const AddSalonSection = () => {
    const Ctx = useContext(ContextContainer)
    const formRef: any = useRef()
    const [imageFile, setImageFile] = useState<any>(null)
    const [position, setPosition] = useState<any>([25.22980044107411, 55.31893997831666])
    const { isLoading, mutate } = useUserAddSalon(setImageFile, Ctx.setProfileTab)


    const onSubmitForm = (e: any) => {
        e.preventDefault();
        methodHandelSubmitSalons(formRef, imageFile,position, mutate)
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
                        <>
                            <ProfileMap position={position} setPosition={setPosition} />
                            <UploadCover
                                imageFile={imageFile}
                                setImageFile={setImageFile}
                            />
                        </>
                    </SalonForm>
                </div>
            </div>
        </div>


    )
}

export default AddSalonSection;
