import type { Metadata } from "next";
import Org2About from "./Org2About";

export const metadata: Metadata = {
  title: "Об организации",
  description:
    "Сведения о Севастопольском городском центре детского творчества «Уриэль» имени Н.К. Рериха. История центра, руководство и официальные реквизиты СГЦДТ.",
  keywords: [
    "Центр Уриэль Севастополь",
    "СГЦДТ Уриэль",
    "Александр Михайлович Анохин",
    "детское творчество Севастополь",
    "реквизиты Уриэль",
  ],
};

export default function AboutPage() {
  return <Org2About />;
}
