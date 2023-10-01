import { SalonsApi} from "@/api/salon-api";
import { useQuery } from "react-query"

export const useAllSalons = () => {
  return useQuery("salons", SalonsApi, {
    refetchOnWindowFocus: false,
  })
}


// export const useLogin = (
//   formRef: any ,
//   setVisibleModal:(bol:boolean)=>void ,
// ) => {
//   return useMutation({
//     mutationFn: () => LoginApi(formRef.current['email'].value, formRef.current['password'].value),
//     onSuccess: res => {
//       if (res.data.status) {
//         toast(res.data.message, { type: "success" })
//         localStorage.setItem('user', JSON.stringify(res.data.user))
//         localStorage.setItem('token', res.data.token)
//         setVisibleModal(false)
//       }
//       else {
//         toast(res.data.message, { type: "error" })
//       }
//     },
//     onError: err => {
//       console.log(err);
//     }
//   })
// }



// export const useRegister = (
//   formRef: any,
//   setVisibleModal:(bol:boolean)=>void ,
// ) => {
//   return useMutation({
//     mutationFn: () => RegisterApi(
//       formRef.current['name'].value,
//       formRef.current['last_name'].value,
//       formRef.current['email'].value,
//       formRef.current['password'].value,
//     ),
//     onSuccess: res => {
//       if (res.data.status) {
//         toast(res.data.message, { type: "success" })
//         localStorage.setItem('user', JSON.stringify(res.data.user))
//         localStorage.setItem('token', res.data.token)
//         setVisibleModal(false)
//       }
//       else {
//         toast(res.data.message, { type: "error" })
//       }
//     },
//     onError: err => {
//       console.log(err);
//     }
//   })
// }



