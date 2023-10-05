import dynamic from "next/dynamic";
import { ModalEditSalonType } from "@/types/salons-types";
import { useEffect, useRef, useState } from "react";
import UploadCover from "./UploadCover";
const CModal = dynamic(() => import("@/components/widget/CModal"), { ssr: false });
const SalonForm = dynamic(() => import("@/components/profile-cmponents/SalonForm"), { ssr: false });


const ModalEditSalon = ({ visible, setVisible, fileSelected }: ModalEditSalonType) => {
    const formRef: any = useRef()
    const [imageFile, setImageFile] = useState<any>(null)

    useEffect(() => {
        if(fileSelected){
            setImageFile(fileSelected?.image_url)
        }
    }, [fileSelected])

    return (
        <>
            <CModal visible={visible} setVisible={setVisible} uId="edit-salon" >
                <>
                    <SalonForm formRef={formRef} isLoading={false} onSubmit={() => { }} defualtData={fileSelected}  >
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

