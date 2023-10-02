import { useUserSalons } from "@/hooks/salon-hooks";
import dynamic from "next/dynamic";

const SalonsCards = dynamic(() => import("@/components/landing-components/SalonsCards"), { ssr: false });
const SkeletonProfileSalon = dynamic(() => import("@/components/widget/Skeleton/SkeletonProfileSalon"), { ssr: false });


const PostSection = () => {
  const { data: salons, isLoading } = useUserSalons()

  return (
    <>
      <div className="w-full flex flex-wrap mt-4">
        {!isLoading && salons?.data.salons.map((item: any, index: number) =>
          <div key={index} className="lg:w-4/12 md:w-6/12 w-full p-2">
            <SalonsCards index={index} className="w-full" salon={item} />
          </div>
          
        )}
         {isLoading && [0,0,0].map((item: any, index: number) =>
          <div key={index} className="lg:w-4/12 md:w-6/12 w-full p-2">
            <SkeletonProfileSalon />
          </div>
        )}
      </div>
    </>
  )
}

export default PostSection;