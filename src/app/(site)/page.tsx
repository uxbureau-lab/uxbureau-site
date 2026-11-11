import { Approach } from "@/components/home/approach";
import { Contact } from "@/components/home/contact";
import { FeaturedWork } from "@/components/home/featured-work";
import { Hero } from "@/components/home/hero";
import { Principals } from "@/components/home/principals";
import { Services } from "@/components/home/services";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { getFeaturedCases } from "@/lib/cases";

export default async function Home() {
  const featured = await getFeaturedCases();

  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <FeaturedWork cases={featured} />
        <Approach />
        <Principals />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
