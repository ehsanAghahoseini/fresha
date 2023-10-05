import dynamic from "next/dynamic";
const SalonsCards = dynamic(() => import("@/components/landing-components/SalonsCards"), { ssr: false });


export default function Home() {
  return (
    <section className="w-full lg:mt-24 mt-14 mb-5 flex items-center justify-center md:py-5 py-3">
      <div className="w-full max-w-[1400px] flex flex-wrap items-center px-3">
        {new Array(8).fill("").map((item: any, index: number) =>
          <div key={index} className="lg:w-3/12 md:w-6/12 w-full p-2">
            <SalonsCards index={index} className="w-full" salon={salo} >
              <button className="w-[110px] h-[35px] text-sm bg-fresh-25 text-white rounded-full flex items-center justify-center">View Salons</button>
            </SalonsCards>
          </div>
        )}
      </div>
    </section>
  )
}


let salo = {
  'name': 'Salon 1',
  'image_url': '/salons/1.avif'
}
