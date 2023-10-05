import dynamic from "next/dynamic";

const Slider = dynamic(() => import("@/components/landing-components/Slider"), { ssr: false });
const DownloadApp = dynamic(() => import("@/components/landing-components/DownloadApp"), { ssr: false });
const Reviews = dynamic(() => import("@/components/landing-components/Reviews"), { ssr: false });
const BestBarber = dynamic(() => import("@/components/landing-components/BestBarber"), { ssr: false });
const BestSalons = dynamic(() => import("@/components/landing-components/BestSalons"));

export default function Home() {
  return (
    <main className={`w-full min-h-screen flex flex-col `}>
      <Slider />
      <BestBarber />
      <BestSalons title="Top Rated" />
      <DownloadApp />
      <Reviews />
    </main>
  )
}
