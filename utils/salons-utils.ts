
export const methodHandelAddSalons = (
    formRef: any,
    imageFile: any,
    mutate:(obj:any)=>void ,
) => {    
    let formData = new FormData()
    formData.append("name", formRef.current['name'].value);
    formData.append("short_description", formRef.current['short_description'].value);
    formData.append("description", formRef.current['description'].value);
    formData.append("locale", 'en');
    formData.append("type", 'salons');
    formData.append("status", '1');
    formData.append("image", imageFile);
    formData.append("svg", '');
    mutate(formData)
}