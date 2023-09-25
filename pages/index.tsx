import dynamic from "next/dynamic";

const Slider = dynamic(() => import("@/components").then((mod) => mod.Slider), { ssr: false });
const DownloadApp = dynamic(() => import("@/components").then((mod) => mod.DownloadApp), { ssr: false });
const Reviews = dynamic(() => import("@/components").then((mod) => mod.Reviews), { ssr: false });
const BestBarber = dynamic(() => import("@/components").then((mod) => mod.BestBarber), { ssr: false });
const BestSalons = dynamic(() => import("@/components").then((mod) => mod.BestSalons), { ssr: false });

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
