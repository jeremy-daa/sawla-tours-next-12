import GenericGrid from "@/components/GenericGrid";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import PackagesGrid from "@/components/PackagesGrid";
import PlannerPolaroid from "@/components/PlannerPolaroid";
import Images from "@/data/Images";
import { DestinationPackagesNameArray } from "@/data/PackagesArray";
import Head from "next/head";

import React from "react";

const metadata = {
  title: "Ethiopia Popular Destinations | Sawla Tours",
  description: `Explore Ethiopia’s popular destinations with Sawla Tours. Enjoy tailor-made Ethiopia tours and guided Ethiopia holidays—culture, landscapes & luxury in one journey.`,
};

const page = () => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="canonical"
          href={`https://www.sawlatours.com/ethiopias-popular-destinations`}
          key="canonical"
        />
      </Head>
      <Hero
        title="Ethiopia’s Popular Destinations"
        index={false}
        background={Images.lalibela4}
        description="Prepare to immerse yourself in the authentic Ethiopia as we guide you on a transformative journey to explore the abundant wealth of history, culture, and wildlife that this spectacular country has to offer."
        link="/enquire"
      />
      <Intro
        title="About Our Popular Destinations"
        description={[
          "Incense curls through Lalibela’s rock-hewn churches, drums thunder over Lake Tana, and crisp mountain air fills the Simien escarpments. Spiced coffee hisses in Addis night markets while salt crystals glitter under Danakil’s noon sun. Welcome to Ethiopia in high definition.",
          "At Sawla Tours—your seasoned Ethiopia travel expert—we turn curiosity into memory with tailor-made Ethiopia tours and seamless guided Ethiopia holidays crafted for discerning explorers. Our hand-picked guides unlock Ethiopia’s popular destinations, weaving candid encounters with master weavers, chanting monks, and camel caravans into each day. Boutique lodges, private 4×4 convoys, and responsible partnerships ensure comfort, access, and a lighter footprint.",
          "Below, discover the destinations that make Ethiopia unforgettable",
        ]}
        img1={Images.danakil3}
        img2={Images.lalibela3}
        button="Explore our tailor-made Ethiopia tours"
        link="#top-destinations"
        lr={true}
      />
      <Intro
        title="Unlock the secrets of a timeless land"
        subtitle="Journeys that go beyond the ordinary"
        description={[
          "Ethiopia isn't just a travel destination; it's a journey of discovery, a realm of extraordinary experiences waiting to unfold. Ethiopia is an adventurer's paradise, a historian's dream, and a culture enthusiast's delight. Browse below to learn more about the top destinations that await your exploration:",
        ]}
        img1={Images.lalibela4}
        img2={Images.axum2}
        button="Our Popular Destinations"
        link="#top-destinations"
        lr={false}
        color={true}
      />
      <PackagesGrid
        title="Our Destinations"
        placeholder="Where would you like to go?"
        packages={DestinationPackagesNameArray}
      />
      <PlannerPolaroid />
      <GenericGrid />
    </div>
  );
};

export default page;
