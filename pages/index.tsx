import { BestBarber, BestSalons, Reviews, DownloadApp, Slider } from "@/components";


export default function Home() {
  return (
    <main className={`w-full min-h-screen flex flex-col `}>
      <Slider/>
      <BestBarber />

      <BestSalons title="Top Rated Salons" />
      <DownloadApp />
      <Reviews />
      {/* <BestSalons title="New Salons" /> */}
    </main>
  )
}
