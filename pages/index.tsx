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

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Sawla Tours</title>
        <meta
          name="description"
          content="A boutique tour specialist celebrated for our personalized, bespoke Ethiopian experiences. Our two-decade legacy in crafting exceptional tours and safaris aligns our thrill for exploration with a profound commitment to community conservation and development."
        />
        <link
          rel="canonical"
          href="https://www.sawlatours.com"
          key="canonical"
        />
      </Head>
      <>
        <Hero background={Images.lalibela5} index title="Home" link="#about" />
        <Intro
          img1={Images.intro1}
          img2={Images.intro2}
          title="Welcome to Sawla Tours"
          subtitle="Where Extraordinary Journeys Unfold"
          description={[
            "We're not just a travel company; we're your key to unlocking unforgettable adventures in the heart of Ethiopia, the mesmerizing jewel of Africa.",
            "Our mission? To unveil Ethiopia's enchanting magic, tailored uniquely to you. With us, travel is not a one-size-fits-all affair but a deeply personalized journey, sculpted around your desires, budget, and adventure spirit.",
          ]}
          lr
          button="About Us"
          link="/about-us"
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
          link="/top-destinations"
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
          link="/top-destinations"
          linkname="View All Destinations"
        />
        <PlannerPolaroid />
        <GenericGrid />
      </>
    </>
  );
}
