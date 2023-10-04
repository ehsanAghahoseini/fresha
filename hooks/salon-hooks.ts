import { SalonsApi , UserSalonsApi , UserAddSalonsApi} from "@/api/salon-api";
import { useQuery , useMutation } from "react-query"
import { toast } from "react-toastify";

export const useAllSalons = () => {
  return useQuery("salons", SalonsApi, {
    refetchOnWindowFocus: false,
  })
}


export const useUserSalons = () => {
  return useQuery("user-salons", UserSalonsApi, {
    refetchOnWindowFocus: false,
  })
}



export const useUserAddSalon = (
  setImageFile:(obj:any)=>void ,
  setProfileTab:(str:string)=>void ,
) => {
  return useMutation({
    mutationFn: (postData) => UserAddSalonsApi(postData),
    onSuccess: res => {
      if (res.data.status) {
        setImageFile(null)
        toast(res.data.message, { type: "success" })
        setProfileTab('list')
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


