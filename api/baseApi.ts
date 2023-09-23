export declare type InputProps = {
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "UPDATE" | "PATCH",
    body?: any,
    token?: boolean,
    formData?: boolean,
}


export const baseApi = async ({ url, method, body, token, formData }: InputProps) => {
    const sendData: any = {};
    const headers: any = {}

    if (token) headers['Authorization'] = `Bearer ${localStorage.getItem("token")}` ?? ""
    if (method != "GET") sendData.body = body

    if (!formData) {
        headers['Content-Type'] = "application/json"
        headers['Accept'] = "application/json"
        headers['withCredentials'] = true
        // headers['Access-Control-Allow-Origin'] = '*'
        // headers['Access-Control-Allow-Headers'] = '*'
        // headers['origin'] = "*"

    }
    sendData.headers = headers
    sendData.method = method ?? "GET"
    sendData.credentials =  "include"
    const request = await fetch(url, sendData)
    const response = request.json();
    return response.then((res) => {
        return res
    })
        .catch((err) => {
            return err
        })
}



export const base_url = 'https://panel.mwa3id.com/public/api/v1/'