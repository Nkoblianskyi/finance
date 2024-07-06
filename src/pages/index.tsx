import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "@/layouts/main_layout";
import { Hero } from "@/components/hero/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container">
        <Layout>
          <Hero/>
        </Layout>
      </div>
    </>
  );
}
