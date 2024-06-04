import NotFound from "@/pages/404";
import Accordion from "@/components/Accordion";
import GenericGrid from "@/components/GenericGrid";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ItineraryDescription from "@/components/ItineraryDescription";
import PlannerPolaroid from "@/components/PlannerPolaroid";
import { getItinerary } from "@/data/ExperiencesPackagesItineraryArray";

import React from "react";
import Head from "next/head";
type Params = {
  params: {
    id: string;
    id2: string;
  };
};
type params = {
  id: string;
  id2: string;
};

const page = ({ id, id2 }: params) => {
  const itinerary = getItinerary(Number(id2), Number(id));

  return (
    <>
      <Head>
        <title>
          {itinerary ? itinerary.title + " - Sawla Tours" : "Not Found"}
        </title>
        <meta
          name="description"
          content={itinerary ? itinerary.description : "Not Found"}
        />
        <link
          rel="canonical"
          href={`https://www.sawlatours.com/tours-by-experience/${id}/${id2}`}
          key="canonical"
        />
      </Head>
      <div>
        {itinerary ? (
          <>
            {itinerary.title && (
              <Hero
                title={itinerary.title}
                index={itinerary.index}
                background={itinerary.image}
                description={itinerary.description}
                link="/enquire"
              />
            )}
            {itinerary.intro[0] && (
              <Intro
                title={itinerary.intro[0].title}
                subtitle={itinerary.intro[0].subtitle}
                description={itinerary.intro[0].description}
                lr={itinerary.intro[0].lr}
                link={itinerary.intro[0].link}
                button={itinerary.intro[0].button}
                img1={itinerary.intro[0].img1}
                img2={itinerary.intro[0].img2}
              />
            )}
            <div id="destination-highlights">
              {itinerary.tourdescription2 &&
                itinerary.tourdescription2.map((tourdescription2, index) => (
                  <Accordion
                    key={index}
                    title={
                      index === 0
                        ? "Highlighted Destinations"
                        : "Itinerary at a Glance"
                    }
                    destinations={tourdescription2.destinations}
                    concact={index === 1 ? true : false}
                  />
                ))}
            </div>
            {itinerary.itinerarydescription && (
              <ItineraryDescription
                title={itinerary.itinerarydescription.title}
                itineraries={itinerary.itinerarydescription.itineraries}
              />
              // <TrekkingDescription
              //   title={
              //     itinerary.itinerarydescription
              //       ? itinerary.itinerarydescription.title
              //       : ""
              //   }
              //   itineraries={
              //     itinerary.itinerarydescription
              //       ? itinerary.itinerarydescription.itineraries
              //       : []
              //   }
              // />
            )}
            <PlannerPolaroid />
            <GenericGrid />
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};
export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.id;
  const id2 = params.id2;

  return {
    props: {
      id,
      id2,
    },
  };
}
export default page;
