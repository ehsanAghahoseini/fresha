import { ContextContainer } from "@/context/ContextContainer";
import { useUserSalons } from "@/hooks/salon-hooks";
import dynamic from "next/dynamic";
import { useContext, useState } from "react";

const SalonsCards = dynamic(() => import("@/components/landing-components/SalonsCards"), { ssr: false });
const SkeletonProfileSalon = dynamic(() => import("@/components/widget/Skeleton/SkeletonProfileSalon"), { ssr: false });
const CSvgEye = dynamic(() => import("@/icons/CSvgEye"), { ssr: false });
const CSvgTrash = dynamic(() => import("@/icons/CSvgTrash"), { ssr: false });
const CSvgEdit = dynamic(() => import("@/icons/CSvgEdit"), { ssr: false });
const ModalEditSalon = dynamic(() => import("@/components/profile-cmponents/ModalEditSalon"), { ssr: false });


const PostSection = () => {
  const Ctx = useContext(ContextContainer)
  const { data: salons, isLoading } = useUserSalons()
  const [fileSelected, setFileSelected] = useState<any>(null)
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false)

  const handelStartViewDetail=(item:any)=>{
    Ctx.setVisibleDetail(true)
    Ctx.setSalonId(item.id)
  }

  const handelStartEdit=(item:any)=>{
    setFileSelected(item)
    setVisibleEdit(true)
  }

  return (
    <>
      <div className="w-full flex flex-wrap mt-4">
        {!isLoading && salons?.data.salons.map((item: any, index: number) =>
          <div key={index} className="lg:w-4/12 md:w-6/12 w-full p-2">
            <SalonsCards
              index={index}
              className="w-full"
              salon={item}
            >
              <div className="flex items-center">
                <button  onClick={()=>handelStartViewDetail(item)} className="w-[35px] h-[35px] border border-fresh-25 rounded mr-1 flex items-center justify-center">
                  <CSvgEye className="stroke-fresh-25 w-[25px]" />
                </button>
                <button onClick={() =>  handelStartEdit(item) } className="w-[35px] h-[35px] border border-fresh-25 rounded mr-1 flex items-center justify-center">
                  <CSvgEdit className="fill-fresh-25 w-[20px]" />
                </button>
                {/* <button className="w-[35px] h-[35px] border border-fresh-25 rounded mr-1 flex items-center justify-center">
                  <CSvgTrash className="stroke-fresh-25 w-[25px]" />
                </button> */}
              </div>
            </SalonsCards>
          </div>

        )}
        {isLoading && [0, 0, 0].map((item: any, index: number) =>
          <div key={index} className="lg:w-4/12 md:w-6/12 w-full p-2">
            <SkeletonProfileSalon />
          </div>
        )}
      </div>

      <ModalEditSalon
        visible={visibleEdit}
        setVisible={setVisibleEdit}
        fileSelected={fileSelected}
         />
    </>
  )
}

export default PostSection;