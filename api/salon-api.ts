import { baseApi, base_url } from "./baseApi";

export const SalonsApi = async () => {
    const data = await baseApi({ url: `${base_url}salon/salons`, method: "GET" })
    return { data };
}


export const SearchSalonsApi = async (name:string) => {
    const data = await baseApi({ url: name ? `${base_url}salons/search?name=${name}` : `${base_url}salon/salons`, method: "GET" })
    return { data };
}

export const SalonsSingleApi = async (id:number) => {
    const data = await baseApi({ url: `${base_url}salon/${id}`, method: "GET" })
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


export const UserEditSalonsApi = async (postData:any , id:number) => {
    const data = await baseApi({ url: `${base_url}salon/${id}/update`, method: "POST" , token:true , body:postData , formData:true })
    return { data };
}