import type { Metadata } from "next";
import FoundationHero from "./main";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "Добро пожаловать на официальную страницу Севастопольского городского фонда Рериха. Культурные проекты, история и просвещение.",
  keywords: [
    "Фонд Рериха",
    "СГФР",
    "Севастополь культура",
    "Рериховское движение",
  ],
};

export default function FoundationPage() {
  return <FoundationHero />;
}
