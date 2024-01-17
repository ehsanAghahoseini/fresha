import { toast } from "react-toastify";

export const methodHandelSubmitSalons = (
    formRef: any,
    imageFile: any,
    position: any,
    mutate: (obj: any) => void,
) => {
    let formData = new FormData()
    if (imageFile == null) {
        return toast("Cover cannot be null", { type: "success" })
    }
    else if (typeof imageFile === 'object') {
        formData.append("image", imageFile);
    }
    formData.append("name", formRef.current['name'].value);
    formData.append("short_description", formRef.current['short_description'].value);
    formData.append("description", formRef.current['description'].value);
    formData.append("locale", 'en');
    formData.append("type", 'salons');
    formData.append("status", '1');
    formData.append("image", typeof imageFile === 'object' ? imageFile : null);
    formData.append("latitude", position?.[0]);
    formData.append("longitude", position?.[1]);
    formData.append("svg", '');
    mutate(formData)
}