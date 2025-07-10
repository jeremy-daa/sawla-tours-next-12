import Head from "next/head";
import Images from "../data/Images";
import {
  DestinationPackagesArray,
  EthiopiaTourPackagesArray,
  ToursByExperienceArray,
} from "../data/PackagesArray";
import GenericGrid from "../components/GenericGrid";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import IntroPackages from "../components/IntroPackages";
import PackagesList from "../components/PackagesList";
import PlannerPolaroid from "../components/PlannerPolaroid";
import Slider from "../components/Slider";
import Intro2 from "@/components/Intro2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sawla Tours | Bespoke Ethiopian Tours & Tailored Journeys</title>
        <meta
          name="description"
          content="Discover Sawla Tours’ Bespoke Ethiopian Tours and Tailor Ethiopia Tours—private adventures that immerse you in Ethiopia’s culture, heritage, and landscapes."
        />
        <link
          rel="canonical"
          href="https://www.sawlatours.com"
          key="canonical"
        />
      </Head>
      <>
        <Hero background={Images.lalibela5} index title="Home" link="#about" />
        <Intro2
          img1={Images.intro1}
          img2={Images.intro2}
          title="Curating Extraordinary Journeys Through Ethiopia"
          subtitle=""
          description={[
            "Sawla Tours is a boutique, deluxe tour company in Ethiopia, specializing in Bespoke Ethiopian Tours and expert-led explorations across the country. We offer private Ethiopia journeys, crafting Tailor Ethiopia Tours that span intimate family getaways to solo expeditions—each designed to immerse you in Ethiopia’s most breathtaking landscapes, vibrant culture, and rich heritage.",
            "Drawing on deep expertise in Ethiopia’s history, culture, and terrain, Sawla Tours creates customized experiences that foster genuine connections and meaningful immersion. Committed to sustainable tourism, our Bespoke Ethiopian Tours ensure every trip is transformative, benefiting both travelers and the communities we visit.",
            "At least 80% of our business comes from repeat clients and referrals—a testament to the exceptional care, service, and relationships we build on every Tailor Ethiopia Tours itinerary.",
            "If you’re ready to embark on an authentic sustainable Ethiopian adventure, reach out to our expert travel designers at Sawla Tours to begin planning a journey that goes beyond the ordinary.",
          ]}
          lr
          button="Start Planning Your Journey"
          link="/enquire"
        />
        <IntroPackages
          title1="Our Popular"
          title2="Itineraries By Experience"
          link="tours-by-experience"
          packages={ToursByExperienceArray}
        />
        <Intro
          img1={Images.intro3}
          img2={Images.intro4}
          title="Experience the Sawla difference"
          subtitle="Your Journey, Your Way"
          description={[
            "A boutique tour specialist celebrated for our personalized, bespoke Ethiopian experiences. Our two-decade legacy in crafting exceptional tours and safaris aligns our thrill for exploration with a profound commitment to community conservation and development.",
            "With us, your travel dreams take center stage. Our dedicated team meticulously designs your itinerary to mirror your aspirations, painting an authentic picture of Ethiopia's vibrant cultures, historical wonders, and awe-inspiring wildlife.",
          ]}
          lr={false}
          button="Our Top Destinations"
          link="/ethiopias-popular-destinations"
        />
        <Slider
          title="Banquet of Ethiopian Tour Themes"
          description="Explore the diverse beauty of Ethiopia through our specially crafted tour themes, tailored to fit your unique interests and desires. Immerse yourself in a world of adventure, culture, and breathtaking landscapes. Embrace a journey like no other and let Ethiopia's mysteries awaken your wanderlust."
          cards={EthiopiaTourPackagesArray}
        />
        <PackagesList
          title="Ethiopia Popular Destinations"
          description="Dive into uncharted territories and wilderness, be part of meaningful conservation efforts, elevate your travel dreams in untouched spots, and soak in genuine cultural moments."
          packages={DestinationPackagesArray.slice(0, 6)}
          link="/ethiopias-popular-destinations"
          linkname="View All Destinations"
        />
        <PlannerPolaroid />
        <GenericGrid />
      </>
    </>
  );
}
