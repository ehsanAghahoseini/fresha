import { SalonsApi , UserSalonsApi , UserAddSalonsApi , UserEditSalonsApi , SalonsSingleApi, SearchSalonsApi} from "@/api/salon-api";
import { useQuery , useMutation , useQueryClient } from "react-query"
import { toast } from "react-toastify";

export const useAllSalons = () => {
  return useQuery("salons", SalonsApi, {
    refetchOnWindowFocus: false,
  })
}


export const useSearchSalons = (
  name:any ,
) => {  
  return useQuery("search-salons", ()=>SearchSalonsApi(name), {
    refetchOnWindowFocus: false,
    enabled:false
  })
}


export const useUserSalons = () => {
  return useQuery("user-salons", UserSalonsApi, {
    refetchOnWindowFocus: false,
  })
}



export const useSingleSalons = (
  salon_id:any,
) => {
  return useQuery(["salons" , salon_id], ()=>SalonsSingleApi(salon_id), {
    refetchOnWindowFocus: false,
    enabled:false
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


export const useUserEditSalon = (
  setImageFile:(obj:any)=>void ,
  setVisible:(bol:boolean)=>void,
  id:number 
) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (postData) => UserEditSalonsApi(postData , id),
    onSuccess: res => {
      if (res.data.status) {
        setImageFile(null)
        queryClient.refetchQueries('user-salons')
        setVisible(false)
        toast(res.data.message, { type: "success" })
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



