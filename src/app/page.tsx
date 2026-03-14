import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Фонд Рерихов и Центр «Уриэль» | Севастополь",
  description:
    "Официальный портал Севастопольского городского фонда Рерихов и Центра детского творчества «Уриэль». Культура, искусство и просвещение в Севастополе.",
  keywords: [
    "Фонд Рерихов Севастополь",
    "Центр Уриэль",
    "Рерих Севастополь",
    "детское творчество Севастополь",
  ],
  openGraph: {
    title: "Фонд Рерихов и Центр «Уриэль» | Севастополь",
    description: "Культурно-просветительские организации Севастополя",
    images: ["/hero-bg.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}
