import { LoginApi, RegisterApi } from "@/api";
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
) => {
  return useMutation({
    mutationFn: () => LoginApi(formRef.current['email'].value, formRef.current['password'].value),
    onSuccess: res => {
      if (res.data.status) {
        toast('Bot updated succesfuly.', { type: "success" })
        setVisibleModal(false)
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
        toast('Bot updated succesfuly.', { type: "success" })
        setVisibleModal(false)
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



