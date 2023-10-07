import { LoginApi, RegisterApi } from "@/api/auth-api";
import { useMutation } from "react-query"
import { toast } from "react-toastify";

// export const useAllBots = () => {
//   return useQuery("bots", BotsApi, {
//     refetchOnWindowFocus: false,
//   })
// }


export const useLogin = (
  formRef: any ,
  setVisibleModal:(bol:boolean)=>void ,
  setIsAuth:(bol:boolean)=>void
) => {
  return useMutation({
    mutationFn: () => LoginApi(formRef.current['email'].value, formRef.current['password'].value),
    onSuccess: res => {
      if (res.data.status) {
        toast(res.data.message, { type: "success" })
        localStorage.setItem('user', JSON.stringify(res.data.user))
        localStorage.setItem('token', res.data.token)
        setVisibleModal(false)
        setIsAuth(true)
      }
      else {
        toast(res.data.message, { type: "error" })
      }
    },
    onError: err => {
      console.log(err);
    }
  })
}



export const useRegister = (
  formRef: any,
  setVisibleModal:(bol:boolean)=>void ,
  setIsAuth:(bol:boolean)=>void
) => {
  return useMutation({
    mutationFn: () => RegisterApi(
      formRef.current['name'].value,
      formRef.current['last_name'].value,
      formRef.current['email'].value,
      formRef.current['password'].value,
    ),
    onSuccess: res => {
      if (res.data.status) {
        toast(res.data.message, { type: "success" })
        localStorage.setItem('user', JSON.stringify(res.data.user))
        localStorage.setItem('token', res.data.token)
        setVisibleModal(false)
        setIsAuth(true)
      }
      else {
        toast(res.data.message, { type: "error" })
      }
    },
    onError: err => {
      console.log(err);
    }
  })
}



