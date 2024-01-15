import { ContextContainer } from "@/context/ContextContainer";
import { useAllSalons } from "@/hooks/salon-hooks";
import dynamic from "next/dynamic";
import { useContext } from "react";
const SalonsCards = dynamic(() => import("@/components/landing-components/SalonsCards"), { ssr: false });
const SearchMap: any = dynamic(() => import('@/components/search-components/SearchMap'), {
  ssr: false
})

export default function Home() {
  const { data: salons, isLoading } = useAllSalons()
  const Ctx = useContext(ContextContainer)

  const handelViweDetail = (salon: any) => {
    Ctx.setSalonId(salon.id)
    Ctx.setVisibleDetail(true)
  }

  return (
    <section className="w-full lg:mt-[80px] mt-14 mb-5 flex items-center justify-center ">
      <div className="w-full max-w-[1300px] flex  px-3">
        <div className="md:w-[50%] w-full flex flex-wrap items-center">
          {!isLoading && salons?.data?.salons.map((item: any, index: number) =>
            <div key={index} className=" sm:w-6/12 w-full p-2">
              <SalonsCards index={index} className="w-full" salon={item} >
                <button onClick={() => handelViweDetail(item)} className="w-[110px] h-[35px] text-sm bg-fresh-25 text-white rounded-full flex items-center justify-center">View Salons</button>
              </SalonsCards>
            </div>
          )}
        </div>
        <div className="w-[50%] h-screen sticky top-[80px] md:flex hidden  p-2">
          <div className="w-full h-full rounded-md overflow-hidden">
            <SearchMap listPlace={[]} />
          </div>
        </div>
      </div>
    </section>
  )
}


let salo = {
  'name': 'Salon 1',
  'image_url': '/salons/1.avif'
}
