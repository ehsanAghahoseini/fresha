import { baseApi, base_url } from "./baseApi";

export const SalonsApi = async () => {
    const data = await baseApi({ url: `${base_url}salon/salons`, method: "GET" })
    return { data };
}


export const UserSalonsApi = async () => {
    const data = await baseApi({ url: `${base_url}salon/user-salons`, method: "POST" , token:true })
    return { data };
}


export const UserAddSalonsApi = async (postData:any) => {
    const data = await baseApi({ url: `${base_url}salon/create`, method: "POST" , token:true , body:postData , formData:true })
    return { data };
}