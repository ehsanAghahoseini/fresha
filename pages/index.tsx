import { BestBarber, BestSalons, DownloadApp, Slider } from "@/components";


export default function Home() {
  return (
    <main className={`w-full min-h-screen flex flex-col `}>
      <Slider/>
      <BestBarber />

      <BestSalons title="Top Rated Salons" />
      <DownloadApp />
      {/* <BestSalons title="New Salons" /> */}
    </main>
  )
}
