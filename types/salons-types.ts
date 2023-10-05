

export interface FormSalonType {
    formRef:any ,
    onSubmit:(e:any)=>void ,
    isLoading:boolean ,
    children:React.ReactNode ,
    defualtData?:any ,
}



export interface UploadCoverType {
    imageFile:any ,
    setImageFile:(obj:any)=>void ,
}



export interface ModalEditSalonType {
    visible:boolean ,
    setVisible:(bol:boolean)=>void ,
    fileSelected:any ,
}