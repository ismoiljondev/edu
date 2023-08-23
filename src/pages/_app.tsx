import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import { ContextProvoder } from "@/utils/context/myContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvoder>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvoder>
  );
}
