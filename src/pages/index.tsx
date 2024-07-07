import { Inter } from "next/font/google";
import { Layout } from "@/layouts/main_layout";
import { Hero } from "@/components/hero/hero";
import { Details } from "@/components/details/_details";
import { Leader } from "@/components/leader/_leader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container">
        <Layout>
          <Hero/>
          <Details/>
          <Leader/>
        </Layout>
      </div>
    </>
  );
}
