import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/global";
import Navbar from "@/components/shared/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}
