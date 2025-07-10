import GenericGrid from "@/components/GenericGrid";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import PackagesGrid from "@/components/PackagesGrid";
import PlannerPolaroid from "@/components/PlannerPolaroid";
import Images from "@/data/Images";
import { ToursByExperienceArray } from "@/data/PackagesArray";
import Head from "next/head";

const page = () => {
  const packages = ToursByExperienceArray.map((item) => {
    return {
      title: item.title,
      image: item.image,
      link: item.link,
    };
  });
  // const TopToursByExperience = ToursByExperienceArray.sort(
  //   () => 0.5 - Math.random()
  // ).slice(0, 5);
  return (
    <>
      <Head>
        <title>Ethiopia Tour Itineraries | Sawla Tours</title>
        <meta
          name="description"
          content="Explore Ethiopia tour itineraries—history, culture, festivals, wildlife, or adventure. Book custom Ethiopia tours and plan your dream trip today. "
        />
        <link
          rel="canonical"
          href="https://www.sawlatours.com/tours-by-experience"
          key="canonical"
        />
      </Head>
      <article>
        <Hero
          title="Itineraries By Experience"
          index={false}
          background={Images.wollo1}
          description="Your pathfinder to extraordinary Ethiopian experiences"
          link="/enquire"
        />
        <Intro
          title="Ethiopia Tour Itineraries By Experience"
          subtitle="Where will Ethiopia’s story take you?"
          description={[
            "From Lalibela’s rock-hewn churches to the flamingo-pink lakes of the Rift Valley, Ethiopia is a living kaleidoscope of history, culture, and raw beauty. Gelada monkeys graze alpine meadows, incense drifts through medieval monasteries, and desert sunsets ignite the Danakil salt flats. Whatever sparks your wanderlust—ancient legends, tribal encounters, wildlife shoots, or high-altitude treks—Sawla Tours turns Ethiopia’s diversity into an itinerary made for you. ",
            "Browse our Ethiopia Tour Itineraries by Experience below, then let our specialists stitch destinations, dates, and dreams into one seamless journey.",
          ]}
          lr
          link="#top-tours"
          button="Top Itineraries By Experience"
          img1={Images.lalibela4}
          img2={Images.yemata1}
        />
        {/* <section id="top-tours">
        <Slider
          title="Top Itineraries By Experience"
          description="We've curated our top Itineraries By Experience to help you find the perfect match."
          cards={TopToursByExperience}
        />
      </section> */}
        <Intro
          title="A Tour for every taste"
          subtitle="What's your travel style?"
          description={[
            "Are you a history buff? Our Historic Tours reveal ancient wonders. If cultural immersion is your calling, Tribal Tours will immerse you in Ethiopia's diverse societies.  ",
            "For festival lovers, our Festival Tours offer vibrant celebrations, while our Adventure Tours test your mettle in the wild.",
            "Photographers can capture breathtaking vistas in our Photography Tours, and nature enthusiasts will love our Birding and Wildlife Tours.",
          ]}
          lr={false}
          link="#top-tours"
          button="Top Itineraries By Experience"
          img1={Images.lalibela4}
          img2={Images.yemata1}
        />
        <PackagesGrid
          title="Our Itineraries By Experience"
          placeholder="Search by experience"
          packages={packages}
        />

        <PlannerPolaroid />
        <GenericGrid />
      </article>
    </>
  );
};

export default page;
