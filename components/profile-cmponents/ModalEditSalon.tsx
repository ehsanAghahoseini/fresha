import dynamic from "next/dynamic";
import { ModalEditSalonType } from "@/types/salons-types";
import { useEffect, useRef, useState } from "react";
import { useUserEditSalon } from "@/hooks/salon-hooks";
import UploadCover from "./UploadCover";
import { methodHandelSubmitSalons } from "@/utils/salons-utils";
const CModal = dynamic(() => import("@/components/widget/CModal"), { ssr: false });
const SalonForm = dynamic(() => import("@/components/profile-cmponents/SalonForm"), { ssr: false });


const ModalEditSalon = ({ visible, setVisible, fileSelected }: ModalEditSalonType) => {
    const formRef: any = useRef()
    const [imageFile, setImageFile] = useState<any>(null)
    const { isLoading, mutate } = useUserEditSalon(setImageFile ,setVisible , fileSelected?.id)


    const onSubmitForm = (e: any) => {
        e.preventDefault();
        methodHandelSubmitSalons(formRef, imageFile, mutate)
    }

    useEffect(() => {
        if(fileSelected){
            setImageFile(fileSelected?.image_url)
        }
    }, [fileSelected])

    return (
        <>
            <CModal visible={visible} setVisible={setVisible} uId="edit-salon" >
                <>
                    <SalonForm formRef={formRef} isLoading={isLoading} onSubmit={onSubmitForm} defualtData={fileSelected}  >
                        <>
                            <UploadCover imageFile={imageFile} setImageFile={setImageFile} />
                        </>
                    </SalonForm>
                </>
            </CModal>
        </>
    )
}

export default ModalEditSalon;

