import EarlyAcessPage from "@/components/EarlyAcessPage";
import LandingPage from "@/components/LandingPage";
import SharedComponents from "@/components/SharedComponents";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LandingPage />
      <SharedComponents />
      <EarlyAcessPage />
    </>
  );
}
