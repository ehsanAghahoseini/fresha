import dynamic from "next/dynamic";
const MainProfile = dynamic(() => import("@/components/profile-cmponents/MainProfile"), { ssr: false });
const SideBar = dynamic(() => import("@/components/profile-cmponents/SideBar"), { ssr: false });


export default function Home() {

  return (
    <section className="w-full lg:mt-24 mt-14 mb-5 flex items-center justify-center md:py-5 py-3">
      <div className="w-full max-w-[1200px] mt-5 flex flex-wrap px-3">
        <SideBar />
        <MainProfile />
      </div>
    </section>
  )
}


