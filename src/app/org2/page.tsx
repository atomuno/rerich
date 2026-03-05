import type { Metadata } from "next";
import CenterHero from "./main";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "Добро пожаловать в СГЦДТ «Уриэль» — центр художественного воспитания и творческого развития детей в Севастополе.",
  keywords: [
    "детское творчество",
    "художественная школа Севастополь",
    "Уриэль",
    "центр Рериха",
    "развитие детей",
  ],
};

export default function CenterPage() {
  return <CenterHero />;
}
