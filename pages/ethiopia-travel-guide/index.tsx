import GenericGrid from "@/components/GenericGrid";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import PackagesList from "@/components/PackagesList";
import PlannerPolaroid from "@/components/PlannerPolaroid";
import { EthiopiaGuideArray } from "@/data/PackagesArray";

import Images from "@/data/Images";

import React from "react";
import Accordion from "@/components/Accordion";
import Head from "next/head";
import SimpleDescription from "@/components/SimpleDescription";
const metadata = {
  title: "Ethiopia Travel Guide | Sawla Tours Expert Tips & Insights",
  description: `Explore our Ethiopia Travel Guide for expert tips and insights. Sawla Tours offers bespoke expeditions across Ethiopia, showcasing a glimpse of our unique travel experiences. Let us craft an unforgettable adventure tailored just for you.`,
};
const page = () => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="canonical"
          href={`https://www.sawlatours.com/ethiopia-travel-guide`}
          key="canonical"
        />
      </Head>
      <Hero
        title="Ethiopia Guide"
        description="Explore the best of Ethiopia with our expert guides."
        background={Images.danakil2}
        link="/enquire"
        linkname="Start Planning"
        index={false}
      />
      <Intro
        title={"Why Ethiopia Captivates Travelers?"}
        description={[
          "Where incense-filled churches echo with ancient chants and lunar salt flats glow at sunset, Ethiopia travel rewrites every idea you had about adventure. Read on to sample a few highlights—UNESCO treasures, coffee rituals, rare wildlife, and more—that reveal why Ethiopia truly captivates travelers.",
        ]}
        img1={Images.yemata1}
        img2={Images.lalibela5}
        button="Start your journey"
        lr={false}
        link="/enquire"
      />
      {/* <div className="ethiopia-guide-wrapper">
        <div className="ethiopia-guide">
          <h2>Why should you visit Ethiopia?</h2>
          <ul>
            <li>
              <span>Rich cultural heritage</span>Ethiopia is home to a diverse
              range of ethnic groups, each with their own unique traditions and
              customs.
            </li>
            <li>
              <span>Historic sites</span>Ethiopia has a rich history dating back
              to ancient times, with notable sites such as the ancient city of
              Axum and the rock-hewn churches of Lalibela.
            </li>
            <li>
              <span>Stunning landscapes</span>From the Danakil Depression to the
              Simien Mountains, Ethiopia boasts breathtaking natural scenery
              that will leave travelers in awe.
            </li>

            <li>
              <span>Unique wildlife</span>Ethiopia is home to a variety of
              unique wildlife, including the Ethiopian wolf and the Gelada
              baboon.
            </li>
            <li>
              <span>Coffee culture</span>Ethiopia is the birthplace of coffee,
              and traveling here provides an opportunity to experience the
              country&apos;s rich coffee culture firsthand.
            </li>
            <li>
              <span>Religious pilgrimage sites</span>Ethiopia is a deeply
              religious country, with numerous pilgrimage sites such as the Axum
              Tsion, the Rock Churches of Lalibela, Debre Berhan Selassie
              Church, and the Sof Omar Cave.
            </li>
            <li>
              <span>Culinary Delights</span>Indulge in Ethiopia&apos;s unique
              cuisine, a fusion of flavors and spices that sets every
              foodie&apos;s heart alight.
            </li>
            <li>
              <span>Warm hospitality</span>Ethiopians are known for their warm
              and welcoming nature, making travelers feel at home.
            </li>
            <li>
              <span>Trekking opportunities</span>Ethiopia offers numerous
              opportunities for trekking, including community trekking in Tigray
              and Wollo, the Simien Mountains, and Bale Mountains National Park.
            </li>
            <li>
              <span>Colorful markets</span>Experience the bustle of
              Ethiopia&apos;s vibrant markets, a sensory delight reflecting the
              country&apos;s rich daily life.
            </li>
            <li>
              <span>Festivals</span>Ethiopia is home to a variety of festivals
              throughout the year, including the Timkat festival and the Meskel
              festival.
            </li>
          </ul>
        </div>
      </div> */}
      {/* <Accordion
        title="Why should you visit Ethiopia?"
        destinations={[
          {
            title: "Rich cultural heritage",
            description:
              "Ethiopia is home to a diverse range of ethnic groups, each with their own unique traditions andcustoms.",
          },
          {
            title: "Historic sites",
            description:
              "Ethiopia has a rich history dating back to ancient times, with notable sites such as the ancient city of Axum and the rock-hewn churches of Lalibela.",
          },
          {
            title: "Stunning landscapes",
            description:
              "From the Danakil Depression to the Simien Mountains, Ethiopia boasts breathtaking natural scenery that will leave travelers in awe.",
          },
          {
            title: "Unique wildlife",
            description:
              "Ethiopia is home to a variety of unique wildlife, including the Ethiopian wolf and the Gelada baboon.",
          },
          {
            title: "Coffee culture",
            description:
              "Ethiopia is the birthplace of coffee, and traveling here provides an opportunity to experience the country's rich coffee culture firsthand.",
          },
          {
            title: "Religious pilgrimage sites",
            description:
              "Ethiopia is a deeply religious country, with numerous pilgrimage sites such as the Axum Tsion, the Rock Churches of Lalibela, Debre Berhan Selassie Church, and the Sof Omar Cave.",
          },
          {
            title: "Culinary Delights",
            description:
              "Indulge in Ethiopia's unique cuisine, a fusion of flavors and spices that sets every foodie's heart alight.",
          },
          {
            title: "Warm hospitality",
            description:
              "Ethiopians are known for their warm and welcoming nature, making travelers feel at home.",
          },
          {
            title: "Trekking opportunities",
            description:
              "Ethiopia offers numerous opportunities for trekking, including community trekking in Tigray and Wollo, the Simien Mountains, and Bale Mountains National Park.",
          },
          {
            title: "Colorful markets",
            description:
              "Experience the bustle of Ethiopia's vibrant markets, a sensory delight reflecting the country's rich daily life.",
          },
          {
            title: "Festivals",
            description:
              "Ethiopia is home to a variety of festivals throughout the year, including the Timkat festival and the Meskel festival.",
          },
        ]}
      /> */}

      <SimpleDescription
        title="Top Reasons to Visit Ethiopia"
        description={[
          {
            title: "1. Rich Cultural Heritage",
            description: [
              "More than 80 ethnic communities share vibrant music, dance, and hand-woven styles—each journey feels like meeting a new nation.",
            ],
          },
          {
            title: "2. Historic Sites",
            description: [
              "Stand before Aksum’s towering stelae or descend into Lalibela’s rock-hewn sanctuaries to trace faith and empire back two millennia.",
            ],
          },
          {
            title: "3. Stunning Landscapes",
            description: [
              "Hike from the cloud-brushed Simien escarpments to the neon sulphur pools of the Danakil Depression, witnessing Earth at its extremes.",
            ],
          },
          {
            title: "4. Unique Wildlife",
            description: [
              "Spot shaggy-maned gelada baboons and the endangered Ethiopian wolf, both found nowhere else on the planet.",
            ],
          },
          {
            title: "5. Coffee Culture",
            description: [
              "Join a traditional buna ceremony where green beans roast, crackle, and brew into the world’s original cup of coffee.",
            ],
          },
          {
            title: "6. Religious Pilgrimage Sites",
            description: [
              "From Axum Tsion to Sof Omar’s underground mosque-cave, sacred journeys thread the highlands.",
            ],
          },
          {
            title: "7. Culinary Delights",
            description: [
              "Tear into sour-sweet injera topped with spiced stews, fiery berbere, and for the brave, velvety raw kitfo.",
            ],
          },
          {
            title: "8. Warm Hospitality",
            description: [
              "“Enkwan dehna metah”—expect smiles, spontaneous invitations, and a heartfelt reverence for guests.",
            ],
          },
          {
            title: "9. Trekking Opportunities",
            description: [
              "Community routes in Tigray, Wollo, the Simiens, and Bale put your permit fees straight into village projects.",
            ],
          },
          {
            title: "10. Colorful Markets",
            description: [
              "Lose track of time among teff sacks, frankincense smoke, and rainbow-striped shawls in weekly merkatos.",
            ],
          },
          {
            title: "11. Festivals",
            description: [
              "Celebrate Timkat’s water processions or Meskel’s bonfire blaze and feel history come alive around you.",
            ],
          },
        ]}
      />
      <PackagesList
        title={"More on Guide to Ethiopia"}
        packages={EthiopiaGuideArray}
      />
      <PlannerPolaroid />
      <GenericGrid />
    </div>
  );
};

export default page;
