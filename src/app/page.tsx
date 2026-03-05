import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Фонд Рериха и Центр «Уриэль» | Севастополь",
  description:
    "Официальный портал Севастопольского городского фонда Рериха и Центра детского творчества «Уриэль». Культура, искусство и просвещение в Севастополе.",
  keywords: [
    "Фонд Рериха Севастополь",
    "Центр Уриэль",
    "Рерих Севастополь",
    "Анохин Александр Михайлович",
    "детское творчество Севастополь",
  ],
  openGraph: {
    title: "Фонд Рериха и Центр «Уриэль» | Севастополь",
    description: "Культурно-просветительские организации Севастополя",
    images: ["/hero-bg.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}
