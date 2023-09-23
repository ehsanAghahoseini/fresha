import { baseApi, base_url } from "./baseApi";

export const LoginApi = async (email: string, password: string) => {
    const data = await baseApi({ url: `${base_url}auth/login?email=${email}&password=${password}`, method: "POST" })
    return { data };
}


export const RegisterApi = async (name: string, last_name: string, email: string, password: string) => {
    const data = await baseApi({ url: `${base_url}auth/register?name=${name}&last_name=${last_name}&email=${email}&password=${password}`, method: "POST" })
    return { data };
}
