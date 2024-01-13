import Contents from "@/components/contents";
import Didatics from "@/components/didatics";
import Hero from "@/components/hero";
import Register from "@/components/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VAROS',
  description: 'Processo seletivo para vaga de desenvolvedor front-end',
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Contents />
      <Didatics />
      <Register />
    </main>
  );
}
