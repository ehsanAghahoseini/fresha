import { baseApi, base_url } from "./baseApi";

export const SalonsApi = async () => {
    const data = await baseApi({ url: `${base_url}salon/salons`, method: "GET" })
    return { data };
}
